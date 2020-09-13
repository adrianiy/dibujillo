import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../global/utils/test/store.mock';
import Configurator from './Configurator';

Object.assign(navigator, {
    clipboard: {
        writeText: () => {},
    },
});
const mockFn = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockFn,
    }),
}));

describe('Configurator private test suite', () => {
    let rendered;
    const closeCallback = jest.fn();
    jest.spyOn(navigator.clipboard, 'writeText');

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Configurator privateRoom closeCallback={closeCallback} />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('configurator');
        expect(element).toBeDefined();
    });

    test('copy link test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('link-button');
        fireEvent.click(button);
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
    });

    test('close config test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('close-button');
        fireEvent.click(button);
        expect(closeCallback).toHaveBeenCalled();
    });
});

describe('Configurator public test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Configurator privateRoom={false} />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByTestId } = rendered;
        try {
            getByTestId('share-section');
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});

describe('Configurator advanced config test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Configurator privateRoom />, {
            user: { loggedIn: true, name: 'test' },
        }));
        const { getByTestId } = rendered;
        const button = getByTestId('adv-conf-button');
        fireEvent.click(button);
    });

    test('show advanced configuration tabs test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('tabs');
        expect(element).toBeDefined();
    });

    test('hide advanced config test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('adv-conf-button');
        const tab = getByTestId('tab-players');
        fireEvent.click(tab);
        const playersSection = getByTestId('players-section');
        expect(playersSection).toBeDefined();
        fireEvent.click(button);
        const shareSection = getByTestId('share-section');
        expect(shareSection).toBeDefined();
    });

    test('show share tab test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('tab-share');
        fireEvent.click(button);
        const element = getByTestId('share-section');
        expect(element).toBeDefined();
    });

    test('show players tab test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('tab-players');
        fireEvent.click(button);
        const element = getByTestId('players-section');
        expect(element).toBeDefined();
    });

    test('show rounds tab test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('tab-rounds');
        fireEvent.click(button);
        const element = getByTestId('rounds-section');
        expect(element).toBeDefined();
    });

    test('show words tab test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('tab-words');
        fireEvent.click(button);
        const element = getByTestId('words-section');
        expect(element).toBeDefined();
    });

    test('show minigames tab test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('tab-minigames');
        fireEvent.click(button);
        const element = getByTestId('minigames-section');
        expect(element).toBeDefined();
    });

    test('start game test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('start-button');
        fireEvent.click(button);
        expect(mockFn).toHaveBeenCalled();
    });
});
