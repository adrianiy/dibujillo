import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ColumnLayout, RowLayout } from '../../global/Layout';
import Header from '../../components/header/Header';
import Avatar from '../../components/avatar/Avatar';

import './Room.css';
import cls from '../../global/utils';

export default function Room() {
    const [rankingVisibility, setRankingVisibility] = useState(true);
    const user = useSelector((state) => state.user);

    const _renderRankingItem = () => (
        <RowLayout>
            <Avatar size="small" image={user.imageUrl} name={user.name} />
            <ColumnLayout className="userDataContainer" dist="middle">
                <span className="userName">
                    { user.name }
                </span>
                <span className="userPoints">
                    0 puntos
                </span>
            </ColumnLayout>
        </RowLayout>
    );

    const _toggleRanking = () => (
        <RowLayout dist="middle spaced" className="closeButton" onClick={() => setRankingVisibility((state) => !state)}>
            { rankingVisibility ? <h3>Ranking</h3> : null }
            <em className="material-icons">{ rankingVisibility ? 'first_page' : 'last_page' }</em>
        </RowLayout>
    );

    const _renderRanking = () => (
        <ColumnLayout className={cls('rankingContainer', !rankingVisibility ? 'contracted' : '')}>
            { _toggleRanking() }
            { _renderRankingItem() }
        </ColumnLayout>
    );

    return (
        <ColumnLayout className="roomContainer" dist="start">
            <Header size="small" />
            <RowLayout className="room">
                { _renderRanking() }
            </RowLayout>
        </ColumnLayout>
    );
}
