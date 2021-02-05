import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ColumnLayout, RowLayout } from '../../global/Layout';
import Header from '../../components/header/Header';
import Avatar from '../../components/avatar/Avatar';

import './Room.css';
import cls from '../../global/utils';
import Button from '../../components/button/Button';
import { findMatch, createSocketConnection, joinMatch } from '../../global/services/websocketService';

export default function Room() {
    const [rankingVisibility, setRankingVisibility] = useState(true);
    const [matchConfig, setMatchConfig] = useState({});
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchConfig = async () => {
            const hash = window.location.pathname.split('room/')[1];
            const config = await findMatch(hash);
            const connection = await createSocketConnection();
            setMatchConfig(config.configuration);
            await joinMatch(connection, hash);
        };
        fetchConfig();
    }, [setMatchConfig]);

    const _renderRankingItem = () => (
        <RowLayout>
            <Avatar size="small" gradient={false} image={user.imageUrl} name={user.name} />
            <ColumnLayout className="userDataContainer" dist="middle">
                <span className="userName">{user.name}</span>
                <span className="userPoints">0 puntos</span>
            </ColumnLayout>
        </RowLayout>
    );

    const _toggleRanking = () => (
        <RowLayout
            testId="ranking-toggle"
            dist="middle spaced"
            className="collapseButton"
            onClick={() => setRankingVisibility((state) => !state)}
        >
            <h3>Ranking</h3>
            <em className="material-icons">{rankingVisibility ? 'first_page' : 'last_page'}</em>
        </RowLayout>
    );

    const _renderRanking = () => (
        <ColumnLayout className={cls('rankingContainer', !rankingVisibility ? 'contracted' : '')}>
            {_toggleRanking()}
            {_renderRankingItem()}
        </ColumnLayout>
    );

    const _renderContent = () => (
        <ColumnLayout className="content">
            <RowLayout dist="middle spaced">
                <RowLayout dist="middle">
                    <h2>{matchConfig.name}</h2>
                    <Button className="text shareLink" color="blue">
                        Compartir
                    </Button>
                </RowLayout>
                <Button className="text" color="blue">
                    <em className="material-icons">play</em>
                    Empezar partida
                </Button>
            </RowLayout>
            <RowLayout className="tilesContainer">
                <div className="drawer">DRAWER</div>
                <div className="chat">CHAT</div>
            </RowLayout>
        </ColumnLayout>
    );

    return (
        <ColumnLayout className="roomContainer" dist="start" testId="room">
            <Header size="small" />
            <RowLayout className="room">
                {_renderRanking()}
                {_renderContent()}
            </RowLayout>
        </ColumnLayout>
    );
}
