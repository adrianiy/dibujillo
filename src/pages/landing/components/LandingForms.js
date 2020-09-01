import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { RowLayout, ColumnLayout } from '../../../global/Layout';
import Button from '../../../components/button/Button';
import Configurator from '../../../components/configurator/Configurator';
import cls from '../../../global/utils';
import actions from '../../../global/utils/store/actions';

import '../Landing.css';
import useClickAwayEffect from '../../../global/effects/ClickAwayEffect';

export default function LandingForms() {
    const [roomId, setRoomId] = useState('');
    const [showConfigurator, setShowConfigurator] = useState(0);
    const user = useSelector((state) => state.user);
    const configRef = useRef(null);
    const dispatch = useDispatch();

    /* istanbul ignore next func */
    useClickAwayEffect(configRef, () => setShowConfigurator(0));

    /* istanbul ignore next func */
    const _googleResponse = (response) => {
        if (response.profileObj) {
            dispatch(actions.user.setUser(response.profileObj));
        }
    };

    const _renderJoinForm = () => (
        <form>
            <input
                className="input"
                data-testid="room-id"
                type="text"
                placeholder="#IdLienzo"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />
        </form>
    );

    const _showConfigurator = (privateRoom) => {
        if (privateRoom) {
            setShowConfigurator(1);
        } else {
            setShowConfigurator(2);
        }
    };

    const _renderRoomSelectorInputs = () => (
        <RowLayout dist="row middle spaced" className={cls('container', 'animated fadeIn')}>
            <ColumnLayout dist="spaced center" className="inputContainer">
                <h3>Crea un nuevo lienzo!</h3>
                <Button testId="config-private" icon="lock" color="black" onClick={() => _showConfigurator(true)}>
                    Crea una partida privada
                </Button>
                <Button testId="config-public" icon="public" color="black" onClick={() => _showConfigurator(false)}>
                    Crea una partida publica
                </Button>
            </ColumnLayout>
            <ColumnLayout dist="spaced center" className="inputContainer">
                <h3>Unete a un lienzo ya creado!</h3>
                { _renderJoinForm() }
                <Button icon="search">
                    Busca una partida publica
                </Button>
            </ColumnLayout>
        </RowLayout>
    );

    const _renderLoginInputs = () => (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_KEY}
            buttonText="Login con Google"
            onSuccess={_googleResponse}
            onFailure={_googleResponse}
            isSignedIn
            cookiePolicy="single_host_origin"
        />
    );

    const _renderConfigurator = () => (
        <Configurator ref={configRef} privateRoom={showConfigurator === 1} />
    );

    return (
        <RowLayout dist="middle center" className="inputsWrapper">
            {
                user.loggedIn ? _renderRoomSelectorInputs() : _renderLoginInputs()
            }
            {
                showConfigurator > 0 ? _renderConfigurator() : null
            }
        </RowLayout>
    );
}
