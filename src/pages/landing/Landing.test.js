import React from 'react';
import Landing from './Landing';
import getMockProvider from '../../global/utils/test/store.mock';

describe('Landing test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Landing />, {
            user: { loggedIn: true },
        }));
    });

    test('renders Landing test', () => {
        const { getByText } = rendered;
        const inputTitleElement = getByText(/Crea un nuevo lienzo!/i);
        expect(inputTitleElement).toBeInTheDocument();
    });
});
