import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../../global/utils/test/store.mock';
import {
    PlayersSection, RoundsSection, WordsSection, MiniGamesSection,
} from './AdvancedConfigurator';

describe('Players section test suite', () => {
    let rendered;
    const matchConfig = {
        maxPlayers: 4,
        onlyFriends: false,
        teams: false,
    };
    const updateMatchConfig = jest.fn();

    beforeEach(() => {
        ({ rendered } = getMockProvider(<PlayersSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('change max players test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('max-players');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(updateMatchConfig).toHaveBeenCalledWith({ players: 'test' });
    });

    test('change only friends flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('only-friends-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ onlyFriends: true });
    });

    test('change teams flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('teams-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ teams: true });
    });
});

describe('Rounds section test suite', () => {
    let rendered;
    const matchConfig = {
        rounds: 4,
        paintTime: 90,
        wordChooseTime: 30,
    };
    const updateMatchConfig = jest.fn();

    beforeEach(() => {
        ({ rendered } = getMockProvider(<RoundsSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('change max rounds test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('rounds');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(updateMatchConfig).toHaveBeenCalledWith({ rounds: 'test' });
    });

    test('change paint time test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('paint-time');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(updateMatchConfig).toHaveBeenCalledWith({ paintTime: 'test' });
    });

    test('change word choose time test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('word-time');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(updateMatchConfig).toHaveBeenCalledWith({ wordChooseTime: 'test' });
    });
});

describe('Words section test suite', () => {
    let rendered;
    const matchConfig = {
        verbs: false,
        adjetives: false,
    };
    const updateMatchConfig = jest.fn();

    beforeEach(() => {
        ({ rendered } = getMockProvider(<WordsSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('change verbs flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('verbs-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ verbs: true });
    });

    test('change adjetives flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('adjetives-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ adjetives: true });
    });
});

describe('Minigames section test suite', () => {
    let rendered;
    const matchConfig = {
        hotWord: false,
        drunk: false,
        blind: false,
    };
    const updateMatchConfig = jest.fn();

    beforeEach(() => {
        ({ rendered } = getMockProvider(<MiniGamesSection matchConfig={matchConfig} updateMatchConfig={updateMatchConfig} />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('change hot word flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('hot-word-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ hotWord: true });
    });

    test('change drunk flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('drunk-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ drunk: true });
    });

    test('change blind flag test', () => {
        const { getByTestId } = rendered;
        const toggle = getByTestId('blind-toggle');
        fireEvent.click(toggle);
        expect(updateMatchConfig).toHaveBeenCalledWith({ blind: true });
    });
});
