import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Header from './Header';

describe('Header test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Header />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('Dibujillo.');
        expect(element).toBeDefined();
    });
});
