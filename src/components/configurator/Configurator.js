import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ColumnLayout, RowLayout } from '../../global/Layout';

import './Configurator.css';
import Button from '../button/Button';
import actions from '../../global/utils/store/actions';

export default function Configurator({ privateRoom }) {
    const [roomId, setRoomId] = useState(null);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const { href } = window.location;
        const userId = user.name;
        const time = (new Date()).getDate();
        setRoomId(`${href}?roomId=${btoa(`${userId}${time}`)}`);
    }, [user.name]);

    const _copyLink = () => {
        navigator.clipboard.writeText(roomId);
        dispatch(actions.toaster.setOkToaster({ text: 'link copiado!' }));
    };

    const _renderLinkShare = () => (
        <ColumnLayout className="linkColumn">
            <h3>Comparte el link con tus amigos!</h3>
            <Button testId="link-button" className="text" icon="link" color="blue" onClick={_copyLink}>
                Copiar enlace
            </Button>
        </ColumnLayout>
    );

    const _renderFriendsShare = () => (
        <ColumnLayout className="friendsColumn">
            <h3>Invita a amigos a tu sala privada!</h3>
            <input type="text" disabled />
        </ColumnLayout>
    );

    const _renderShareSection = () => (privateRoom ? (
        <ColumnLayout>
            {_renderLinkShare()}
            {_renderFriendsShare()}
        </ColumnLayout>
    ) : null);

    const _renderBottomButtons = () => (
        <RowLayout dist="right" className="bottomButtons">
            <Button className="text" color="blue" icon="settings">
                Configuración avanzada
            </Button>
            <Button icon="play_arrow" className="playButton" color="black">
                Iniciar
            </Button>
        </RowLayout>
    );

    return (
        <ColumnLayout testId="configurator" className="configuratorContainer">
            <h2>
                Configura tu partida
                { privateRoom ? ' privada' : ' pública' }
            </h2>
            { _renderShareSection() }
            { _renderBottomButtons() }
        </ColumnLayout>
    );
}

Configurator.propTypes = {
    privateRoom: PropTypes.bool.isRequired,
};
