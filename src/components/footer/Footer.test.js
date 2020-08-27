import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Footer from './Footer';

describe('Footer test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Footer />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('footer');
        expect(element).toBeDefined();
    });
});
