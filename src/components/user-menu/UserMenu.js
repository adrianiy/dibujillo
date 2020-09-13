import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useGoogleLogout } from 'react-google-login';
import { ColumnLayout, RowLayout } from '../../global/Layout';
import Button from '../button/Button';
import cls from '../../global/utils';
import actions from '../../global/utils/store/actions';
import Toggler from '../toggler/Toggler';
import './UserMenu.css';

export default function UserMenu({ className }) {
    const [themeSelector, setThemeSelector] = useState(false);
    const [user] = useSelector((state) => [state.user]);
    const dispatch = useDispatch();

    // istanbul ignore next func
    const _toggleTheme = () => {
        const lightThemeActive = user.theme === 'light';
        const newTheme = lightThemeActive ? 'dark' : 'light';
        dispatch(actions.user.setTheme(newTheme));
    };

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

    const _renderThemeMenu = () => (
        <ColumnLayout dist="spaced">
            <h3 className="row middle">
                <em className="material-icons" data-testid="back-button" onClick={() => setThemeSelector(false)}>arrow_back</em>
                Seleccion de tema
            </h3>
            <RowLayout dist="spaced middle" className="theme">
                Tema claro
                <Toggler status={user.theme === 'light'} handleToggle={_toggleTheme} />
            </RowLayout>
            <RowLayout dist="spaced middle" className="theme">
                Tema oscuro
                <Toggler status={user.theme === 'dark'} handleToggle={_toggleTheme} />
            </RowLayout>
        </ColumnLayout>
    );

    const _renderUserMenu = () => (
        <ColumnLayout testId="user-menu" dist="spaced">
            <h3>{ user.name }</h3>
            <Button testId="profile-button" className="text" icon="person_outline">
                Mi perfil
            </Button>
            <Button testId="theme-button" className="text" icon="palette" onClick={() => setThemeSelector(true)}>
                Aspecto:
                {' '}
                { user.theme }
            </Button>
            <Button testId="logout-button" className="text red" icon="power_settings_new" onClick={_logout}>
                Logout
            </Button>
        </ColumnLayout>
    );

    const _render = () => {
        const userIsLogged = user.loggedIn;

        if (userIsLogged) {
            if (themeSelector) {
                return _renderThemeMenu();
            }
            return _renderUserMenu();
        }

        return null;
    };

    return (
        <div className={cls('menuContainer', className)}>
            { _render() }
        </div>
    );
}

UserMenu.propTypes = {
    className: PropTypes.string,
};

UserMenu.defaultProps = {
    className: '',
};
