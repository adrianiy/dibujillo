import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGoogleLogout } from 'react-google-login';
import { ColumnLayout } from '../../global/Layout';
import Button from '../button/Button';
import cls from '../../global/utils';
import actions from '../../global/utils/store/actions';
import './UserMenu.css';

export default function UserMenu({ className }) {
    const [user] = useSelector((state) => [state.user]);
    const dispatch = useDispatch();

    // istanbul ignore next func
    const _logoutSucces = () => {
        dispatch(actions.user.logout());
    };

    const { signOut, loaded } = useGoogleLogout({
        clientId: process.env.REACT_APP_GOOGLE_KEY,
        onLogoutSuccess: _logoutSucces,
    });

    const _logout = () => {
        // istanbul ignore else
        if (loaded) {
            signOut();
        }
    };

    const _renderUserMenu = () => (
        <ColumnLayout testId="user-menu" dist="spaced" className={cls('UserMenu', className)}>
            <h3>{ user.name }</h3>
            <Button testId="logout-button" className="text red" icon="power_settings_new" onClick={_logout}>
                Logout
            </Button>
        </ColumnLayout>
    );

    return user.loggedIn ? _renderUserMenu() : null;
}
