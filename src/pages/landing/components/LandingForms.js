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
    const [showConfigurator, setShowConfigurator] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const user = useSelector((state) => state.user);
    const configRef = useRef(null);
    const dispatch = useDispatch();

    /* istanbul ignore next func */
    useClickAwayEffect(['.configuratorContainer'], () => setShowConfigurator(0));

    /* istanbul ignore next func */
    const _googleResponse = (response) => {
        if (response.profileObj) {
            dispatch(actions.user.setUser(response.profileObj));
        }
    };

    const _showConfigurator = (privateRoom) => {
        if (privateRoom) {
            setShowConfigurator(1);
        } else {
            setShowConfigurator(2);
        }
    };

    const _changeTab = (tab) => {
        setActiveTab(tab);
    };

    const _renderPrivateForm = () => (
        <ColumnLayout dist="center around" className="matchButtonContainer">
            <Button testId="config-private" icon="lock" className="center" color="black" onClick={() => _showConfigurator(true)}>
                Crea una partida privada
            </Button>
            <Button testId="join-private" icon="play_arrow" className="center">
                Unirse a una partida
            </Button>
        </ColumnLayout>
    );

    const _renderPublicForm = () => (
        <ColumnLayout dist="center around" className="matchButtonContainer">
            <Button
                testId="config-public"
                icon="public"
                color="black"
                className="center"
                onClick={() => _showConfigurator(false)}
            >
                Crea una partida pública
            </Button>
            <Button testId="join-private" className="center" icon="play_arrow">
                Unirse a una partida
            </Button>
        </ColumnLayout>
    );

    const _renderTabs = () => (
        <RowLayout>
            <div
                data-testid="priv-tab"
                className={`gameTab ${!activeTab ? 'active' : ''}`}
                onClick={() => _changeTab(0)}
            >
                Privada

            </div>
            <div
                data-testid="pub-tab"
                className={`gameTab ${activeTab ? 'active' : ''}`}
                onClick={() => _changeTab(1)}
            >
                Pública

            </div>
        </RowLayout>
    );

    const _renderRoomSelectorInputs = () => (
        <ColumnLayout dist="center spaced" className={cls('container', 'animated fadeIn')}>
            {_renderTabs()}
            {!activeTab ? _renderPrivateForm() : _renderPublicForm()}
        </ColumnLayout>
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
        <Configurator
            ref={configRef}
            privateRoom={showConfigurator === 1}
            closeCallback={
            /* istanbul ignore next func */
                () => setShowConfigurator(0)
            }
        />
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
