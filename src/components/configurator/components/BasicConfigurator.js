import React from 'react';
import PropTypes from 'prop-types';
import { ColumnLayout } from '../../../global/Layout';

function BasicPrivateConfiguration({ roomName, updateMatchConfig }) {
    const _renderNameSection = () => (
        <ColumnLayout className="linkSection">
            <h3>Nombre de tu sala</h3>
            <input
                data-testid="name"
                type="text"
                placeholder="Ponle un nombre a tu sala..."
                value={roomName}
                onChange={(e) => updateMatchConfig({ name: e.target.value })}
            />
        </ColumnLayout>
    );

    const _renderFriendsShare = () => (
        <ColumnLayout className="friendsSection">
            <h3>Invita a amigos a tu sala privada!</h3>
            <input type="text" disabled placeholder="Invita a alguien..." />
            <span className="caption">La invitación se enviará al iniciar la partida</span>
        </ColumnLayout>
    );

    return (
        <ColumnLayout testId="share-section">
            {_renderNameSection()}
            {_renderFriendsShare()}
        </ColumnLayout>
    );
}

function BasicPublicConfiguration() {
    return (
        <div>Coming soon...</div>
    );
}

BasicPrivateConfiguration.propTypes = {
    roomName: PropTypes.string.isRequired,
    updateMatchConfig: PropTypes.func.isRequired,
};

export {
    BasicPrivateConfiguration,
    BasicPublicConfiguration,
};
