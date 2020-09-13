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
        const { getByTestId } = rendered;
        const inputTitleElement = getByTestId('priv-tab');
        expect(inputTitleElement).toBeInTheDocument();
    });
});
