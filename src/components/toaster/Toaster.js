import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RowLayout } from '../../global/Layout';
import actions from '../../global/utils/store/actions';
import './Toaster.css';

export default function Toaster() {
    const toasterData = useSelector((state) => state.toaster);
    const dispatch = useDispatch();

    useEffect(() => {
        if (toasterData.display) {
            setTimeout(/* istanbul ignore next func */() => {
                dispatch(actions.toaster.hideToaster());
            }, 1500);
        }
    }, [toasterData.display, dispatch]);

    const _getToasterIcon = () => {
        if (toasterData.ok) {
            return 'checkmark';
        }
        return 'close';
    };

    return toasterData.display ? (
        <RowLayout dist="middle center" className="toasterWrapper animated fadeInDown">
            <RowLayout dist="middle" className="toasterContainer">
                <em className="material-icons-outlined">{ _getToasterIcon() }</em>
                <span>{ toasterData.text }</span>
            </RowLayout>
        </RowLayout>
    ) : null;
}
