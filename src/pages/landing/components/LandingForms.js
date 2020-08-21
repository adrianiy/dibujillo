import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RowLayout, ColumnLayout } from '../../../global/Layout';
import { Button } from '../../../components/button/Button';
import { cls } from '../../../global/utils';

import GoogleLogin from 'react-google-login';

import styles from '../Landing.module.css';
import actions from '../../../global/utils/store/actions';

export default function LandingForms() {
    const [roomId, setRoomId] = useState('');
    const [user] = useSelector(state => [state.user]);
    const dispatch = useDispatch();

    /* istanbul ignore function */
    const _googleResponse = (response) => {
        if (response.profileObj) {
            dispatch(actions.user.setUser(response.profileObj));
        }
    }

    const _renderJoinForm = () => {
        return (
            <form>
                <input
                    className={styles.input}
                    data-testid="room-id"
                    type="text"
                    placeholder="#IdLienzo"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
            </form>
        )
    }

    const _renderRoomSelectorInputs = () => {
        return (
            <RowLayout dist="row middle spaced" className={cls(styles.container, 'animated fadeIn')}>
                <ColumnLayout dist="spaced center" className={styles.inputContainer}>
                    <h3>Crea un nuevo lienzo!</h3>
                    <Button icon="lock" color="black">
                        Crea una partida privada
                    </Button>
                    <Button icon="public" color="black">
                        Crea una partida publica
                    </Button>
                </ColumnLayout>
                <ColumnLayout dist="spaced center" className={styles.inputContainer}>
                    <h3>Unete a un lienzo ya creado!</h3>
                    { _renderJoinForm() }
                    <Button icon="search">
                        Busca una partida publica
                    </Button>
                </ColumnLayout>
            </RowLayout>
        )
    }

    const _renderLoginInputs = () => {
        return (
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_KEY}
                buttonText="Login con Google"
                onSuccess={_googleResponse}
                onFailure={_googleResponse}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />
        )
    }


    return (
        <RowLayout dist="middle center" className={styles.inputsWrapper}>
            {
                user.loggedIn ? _renderRoomSelectorInputs() : _renderLoginInputs()
            }
        </RowLayout>
    )

}
