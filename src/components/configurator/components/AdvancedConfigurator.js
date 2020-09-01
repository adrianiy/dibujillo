import React from 'react';
import PropTypes from 'prop-types';
import { ColumnLayout, RowLayout } from '../../../global/Layout';
import './AdvancedConfigurator.css';
import Toggler from '../../toggler/Toggler';

function ConfigLine({ children }) {
    return (
        <RowLayout dist="spaced middle" className="configLine">
            { children }
        </RowLayout>
    );
}

ConfigLine.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

function PlayersSection({ matchConfig, updateMatchConfig }) {
    return (
        <ColumnLayout testId="players-section">
            <ConfigLine>
                <ColumnLayout>
                    <div>Número de jugadores</div>
                    <span className="caption">Establece el número máximo de jugadores. 0 = sin limite</span>
                </ColumnLayout>
                <input
                    data-testid="max-players"
                    type="text"
                    value={matchConfig.players}
                    onChange={(e) => updateMatchConfig({ players: e.target.value })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Permitir acceso solo a amigos</div>
                <Toggler
                    testId="only-friends-toggle"
                    status={matchConfig.onlyFriends}
                    handleToggle={() => updateMatchConfig({ onlyFriends: !matchConfig.onlyFriends })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Jugar por equipos</div>
                <Toggler
                    testId="teams-toggle"
                    status={matchConfig.teams}
                    handleToggle={() => updateMatchConfig({ teams: !matchConfig.teams })}
                />
            </ConfigLine>
        </ColumnLayout>
    );
}

function RoundsSection({ matchConfig, updateMatchConfig }) {
    return (
        <ColumnLayout testId="rounds-section">
            <ConfigLine>
                <div>Número de rondas</div>
                <input
                    data-testid="rounds"
                    type="text"
                    value={matchConfig.rounds}
                    onChange={(e) => updateMatchConfig({ rounds: e.target.value })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Tiempo en el turno de dibujo (en segundos)</div>
                <input
                    data-testid="paint-time"
                    type="text"
                    value={matchConfig.paintTime}
                    onChange={(e) => updateMatchConfig({ paintTime: e.target.value })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Tiempo para elegir la palabra (en segundos)</div>
                <input
                    data-testid="word-time"
                    type="text"
                    value={matchConfig.wordChooseTime}
                    onChange={(e) => updateMatchConfig({ wordChooseTime: e.target.value })}
                />
            </ConfigLine>
        </ColumnLayout>
    );
}

function WordsSection({ matchConfig, updateMatchConfig }) {
    return (
        <ColumnLayout testId="words-section">
            <ConfigLine>
                <div>Idioma de las palabras</div>
                <span className="caption">Coming soon</span>
            </ConfigLine>
            <ConfigLine>
                <div>Usar verbos</div>
                <Toggler
                    testId="verbs-toggle"
                    status={matchConfig.verbs}
                    handleToggle={() => updateMatchConfig({ verbs: !matchConfig.verbs })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Usar adjetivos</div>
                <Toggler
                    testId="adjetives-toggle"
                    status={matchConfig.adjetives}
                    handleToggle={() => updateMatchConfig({ adjetives: !matchConfig.adjetives })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Usar diccionario propio</div>
                <span className="caption">Coming soon</span>
            </ConfigLine>
        </ColumnLayout>
    );
}

function MiniGamesSection({ matchConfig, updateMatchConfig }) {
    return (
        <ColumnLayout testId="minigames-section">
            <ConfigLine>
                <div>Palabra caliente</div>
                <Toggler
                    testId="hot-word-toggle"
                    status={matchConfig.hotWord}
                    handleToggle={() => updateMatchConfig({ hotWord: !matchConfig.hotWord })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Pincel borracho</div>
                <Toggler
                    testId="drunk-toggle"
                    status={matchConfig.drunk}
                    handleToggle={() => updateMatchConfig({ drunk: !matchConfig.drunk })}
                />
            </ConfigLine>
            <ConfigLine>
                <div>Pincel ciego</div>
                <Toggler
                    testId="blind-toggle"
                    status={matchConfig.blind}
                    handleToggle={() => updateMatchConfig({ blind: !matchConfig.blind })}
                />
            </ConfigLine>
        </ColumnLayout>
    );
}

const propTypes = {
    matchConfig: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        players: PropTypes.number,
        onlyFriends: PropTypes.bool,
        teams: PropTypes.bool,
        rounds: PropTypes.number,
        paintTime: PropTypes.number,
        wordChooseTime: PropTypes.number,
        language: PropTypes.string,
        verbs: PropTypes.bool,
        adjetives: PropTypes.bool,
        dictionary: PropTypes.string,
        hotWord: PropTypes.bool,
        drunk: PropTypes.bool,
        blind: PropTypes.bool,
    }).isRequired,
    updateMatchConfig: PropTypes.func.isRequired,
};

PlayersSection.propTypes = propTypes;
RoundsSection.propTypes = propTypes;
WordsSection.propTypes = propTypes;
MiniGamesSection.propTypes = propTypes;

export {
    PlayersSection,
    RoundsSection,
    WordsSection,
    MiniGamesSection,
};
