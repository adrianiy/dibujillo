import React, {
    useEffect, useState, forwardRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ColumnLayout, RowLayout } from '../../global/Layout';

import './Configurator.css';
import Button from '../button/Button';
import actions from '../../global/utils/store/actions';
import { BasicPrivateConfiguration, BasicPublicConfiguration } from './components/BasicConfigurator';
import {
    PlayersSection, RoundsSection, WordsSection, MiniGamesSection,
} from './components/AdvancedConfigurator';
import TabItem from '../tab-item/TabItem';
import matchConfiguration from './basicConfig';

const TABS = {
    SHARE: 0,
    PLAYERS: 1,
    ROUNDS: 2,
    WORDS: 3,
    MINIGAMES: 4,
};

const Configurator = ({ privateRoom }, ref) => {
    const [roomId, setRoomId] = useState(null);
    const [matchConfig, setMatchConfig] = useState(matchConfiguration);
    const [advancedConfig, setAdvancedConfig] = useState(false);
    const [configTab, setConfigTab] = useState(null);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const updateMatchConfig = useCallback((newConfig) => {
        setMatchConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
    }, []);

    useEffect(() => {
        const { href } = window.location;
        const userId = user.name;
        const time = (new Date()).getDate();
        setRoomId(`${href}?roomId=${btoa(`${userId}${time}`)}`);
        updateMatchConfig({ name: `${user.name}'s room` });
    }, [user.name, updateMatchConfig]);

    const _toggleAdvancedConfig = () => {
        if (advancedConfig) {
            setConfigTab(null);
        }
        setAdvancedConfig(!advancedConfig);
    };

    const _changeConfigTab = (tab) => {
        setConfigTab(tab);
    };

    const _copyLink = () => {
        navigator.clipboard.writeText(roomId);
        dispatch(actions.toaster.setOkToaster({ text: 'Link copiado!' }));
    };

    const _renderShareSection = () => (
        privateRoom
            ? <BasicPrivateConfiguration roomName={matchConfig.name} updateMatchConfig={updateMatchConfig} />
            : <BasicPublicConfiguration />
    );

    const _renderConfig = () => {
        switch (configTab) {
            case TABS.SHARE:
                return _renderShareSection();
            case TABS.PLAYERS:
                return <PlayersSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />;
            case TABS.ROUNDS:
                return <RoundsSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />;
            case TABS.WORDS:
                return <WordsSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />;
            case TABS.MINIGAMES:
                return <MiniGamesSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />;
            default:
                return _renderShareSection();
        }
    };

    const _renderHeader = () => (
        <RowLayout dist="middle spaced" className="header">
            <h2>
                Configura tu partida
                { privateRoom ? ' privada' : ' pública' }
            </h2>
            <Button testId="adv-conf-button" className="text" color="blue" icon="settings" onClick={_toggleAdvancedConfig}>
                { advancedConfig ? 'Configuración básica' : 'Configuración avanzada' }
            </Button>
        </RowLayout>
    );

    const _renderTabs = () => (advancedConfig ? (
        <RowLayout testId="tabs" dist="middle spaced" className="tabsContainer">
            <TabItem
                testId="tab-share"
                active={!configTab || configTab === TABS.SHARE}
                icon="share"
                className="text"
                onClick={() => _changeConfigTab(TABS.SHARE)}
            >
                COMPARTIR
            </TabItem>
            <TabItem
                testId="tab-players"
                stepConnector
                active={configTab === TABS.PLAYERS}
                icon="group"
                className="text"
                onClick={() => _changeConfigTab(TABS.PLAYERS)}
            >
                JUGADORES
            </TabItem>
            <TabItem
                testId="tab-rounds"
                stepConnector
                active={configTab === TABS.ROUNDS}
                icon="loop"
                className="text"
                onClick={() => _changeConfigTab(TABS.ROUNDS)}
            >
                RONDAS
            </TabItem>
            <TabItem
                testId="tab-words"
                stepConnector
                active={configTab === TABS.WORDS}
                icon="spellcheck"
                className="text"
                onClick={() => _changeConfigTab(TABS.WORDS)}
            >
                PALABRAS
            </TabItem>
            <TabItem
                testId="tab-minigames"
                stepConnector
                active={configTab === TABS.MINIGAMES}
                icon="casino"
                className="text"
                onClick={() => _changeConfigTab(TABS.MINIGAMES)}
            >
                MINIJUEGOS
            </TabItem>
        </RowLayout>
    ) : null);

    const _renderBottomButtons = () => (
        <RowLayout dist="spaced middle" className="bottomButtons">
            <Button testId="link-button" className="text" icon="link" color="blue" onClick={_copyLink}>
                Copiar enlace
            </Button>
            <Button icon="play_arrow" className="playButton" color="black">
                Iniciar
            </Button>
        </RowLayout>
    );

    return (
        <RowLayout ref={ref} testId="configurator" className="configuratorContainer">
            <ColumnLayout>
                { _renderHeader() }
                { _renderTabs() }
                { _renderConfig() }
                { _renderBottomButtons() }
            </ColumnLayout>
        </RowLayout>
    );
};

Configurator.propTypes = {
    privateRoom: PropTypes.bool.isRequired,
};

export default forwardRef(Configurator);
