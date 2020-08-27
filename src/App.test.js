import React from 'react';
import App from './App';
import getMockProvider from './global/utils/test/store.mock';

describe('App test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<App />, {
            user: { loggedIn: false },
        }));
    });

    test('renders App', () => {
        const { getByText } = rendered;
        const linkElement = getByText(/Dibujillo/i);
        expect(linkElement).toBeInTheDocument();
    });
});
