import React from 'react';
import { fireEvent } from '@testing-library/react';
import LandingForms from './LandingForms';
import getMockProvider from '../../../global/utils/test/store.mock';

let configuratorTestValue = null;

jest.mock('../../../components/configurator/Configurator', () => ({ privateRoom }) => {
    configuratorTestValue = privateRoom;
    return null;
});

describe('Landing logged test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<LandingForms />, {
            user: { loggedIn: true },
        }));
    });

    test('renders Landing test', () => {
        const { getByTestId } = rendered;
        const configElement = getByTestId('config-private');
        expect(configElement).toBeInTheDocument();
    });

    test('private match configurator test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('config-private');
        fireEvent.click(button);
        expect(configuratorTestValue).toBeTruthy();
    });

    test('public match configurator test', () => {
        const { getByTestId } = rendered;
        const pubTab = getByTestId('pub-tab');
        const privTab = getByTestId('priv-tab');
        fireEvent.click(pubTab);
        const button = getByTestId('config-public');
        fireEvent.click(button);
        expect(configuratorTestValue).toBeFalsy();
        fireEvent.click(privTab);
        const privButton = getByTestId('config-private');
        expect(privButton).toBeDefined();
    });
});

describe('Landing not logged test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<LandingForms />, {
            user: { loggedIn: false },
        }));
    });

    test('input onChange action test', () => {
        const { getByText } = rendered;
        try {
            getByText(/Crea un nuevo lienzo!/i);
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});
