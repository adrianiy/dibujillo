import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Avatar from '../avatar/Avatar';
import { RowLayout } from '../../global/Layout';
import actions from '../../global/utils/store/actions';
import UserMenu from '../user-menu/UserMenu';

export default function Header({ size }) {
    const [userMenuVisibility, setUserMenuVisibility] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    /* istanbul ignore next func */
    const _googleResponse = (response) => {
        if (response.profileObj) {
            dispatch(actions.user.setUser(response.profileObj));
        }
    };

    const _toggleVisibility = () => {
        setUserMenuVisibility((state) => !state);
    };

    const _goHome = () => {
        history.push('/');
    };

    const _renderBigHeader = () => (
        <header className="Header">
            <h1>
                <span>Dibujillo</span>
                .
                <em className="material-icons-outlined">edit</em>
            </h1>
        </header>
    );

    const _renderSmallHeader = () => (
        <header className="Header small">
            <RowLayout dist="spaced middle">
                <em className="material-icons-outlined" onClick={_goHome}>edit</em>
                <Avatar image={user.imageUrl} name={user.name} size="small" onClick={_toggleVisibility} />
                { userMenuVisibility ? <UserMenu /> : null }
            </RowLayout>
            <GoogleLogin
                className="HiddenLoginButton"
                clientId={process.env.REACT_APP_GOOGLE_KEY}
                buttonText="Login con Google"
                onSuccess={_googleResponse}
                onFailure={_googleResponse}
                isSignedIn
                cookiePolicy="single_host_origin"
            />
        </header>
    );
    return size === 'small' ? _renderSmallHeader() : _renderBigHeader();
}

Header.propTypes = {
    size: PropTypes.string,
};

Header.defaultProps = {
    size: 'big',
};
