import React from 'react';
import { fireEvent } from '@testing-library/react';
import LandingForms from './LandingForms';
import getMockProvider from '../../../global/utils/test/store.mock';

describe('Landing logged test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<LandingForms />, {
            user: { loggedIn: true },
        }));
    });

    test('renders Landing test', () => {
        const { getByText } = rendered;
        const inputTitleElement = getByText(/Crea un nuevo lienzo!/i);
        expect(inputTitleElement).toBeInTheDocument();
    });

    test('input onChange action test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('room-id');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toEqual('test');
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
