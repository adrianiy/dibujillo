import React, { useState } from 'react';
import { RowLayout, ColumnLayout } from '../../global/Layout';
import { Button } from '../../components/button/Button';

import styles from './Landing.module.css';

export default function Landing() {
    const [roomId, setRoomId] = useState('');

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

    return (
        <RowLayout dist="row middle center" className={styles.wrapper}>
            <RowLayout dist="row middle spaced" className={styles.container}>
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
        </RowLayout>
    )
}
