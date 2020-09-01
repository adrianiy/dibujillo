import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RowLayout } from '../../global/Layout';
import actions from '../../global/utils/store/actions';
import './Toaster.css';
import Button from '../button/Button';

export default function Toaster() {
    const toasterData = useSelector((state) => state.toaster);
    const dispatch = useDispatch();

    // istanbul ignore next func
    const _close = useCallback(() => {
        dispatch(actions.toaster.hideToaster());
    }, [dispatch]);

    useEffect(() => {
        if (toasterData.display) {
            setTimeout(/* istanbul ignore next func */() => {
                _close();
            }, 2500);
        }
    }, [toasterData.display, _close]);

    const _getToasterIcon = () => {
        if (toasterData.ok) {
            return 'checkmark';
        }
        return 'close';
    };

    return toasterData.display ? (
        <RowLayout dist="middle center" className="toasterWrapper animated fadeInUp">
            <RowLayout dist="middle" className="toasterContainer">
                <em className="material-icons-outlined">{ _getToasterIcon() }</em>
                <span>{ toasterData.text }</span>
                <Button className="text" onClick={_close}>CERRAR</Button>
            </RowLayout>
        </RowLayout>
    ) : null;
}
