import React from 'react';
import UserMenu from './UserMenu';
import getMockProvider from '../../global/utils/test/store.mock';

describe('UserMenu loggedIn test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<UserMenu />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const userNameElement = getByText('test');
        expect(userNameElement).toBeDefined();
    });
});
