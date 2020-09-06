import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGoogleLogout } from 'react-google-login';
import { ColumnLayout } from '../../global/Layout';
import Button from '../button/Button';
import cls from '../../global/utils';
import actions from '../../global/utils/store/actions';
import './UserMenu.css';
import useClickAwayEffect from '../../global/effects/ClickAwayEffect';

export default function UserMenu({ className, closeCallback }) {
    const [user] = useSelector((state) => [state.user]);
    const dispatch = useDispatch();
    const userMenuRef = useRef(null);

    // istanbul ignore next func
    useClickAwayEffect(userMenuRef, () => closeCallback());

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
        <ColumnLayout ref={userMenuRef} testId="user-menu" dist="spaced" className={cls('UserMenu', className)}>
            <h3>{ user.name }</h3>
            <Button testId="profile-button" className="text" icon="person_outline">
                Mi perfil
            </Button>
            <Button testId="logout-button" className="text red" icon="power_settings_new" onClick={_logout}>
                Logout
            </Button>
        </ColumnLayout>
    );

    return user.loggedIn ? _renderUserMenu() : null;
}
