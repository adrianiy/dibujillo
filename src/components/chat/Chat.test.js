import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Chat from './Chat';

describe('Chat test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Chat />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('Chat coming soon...');
        expect(element).toBeDefined();
    });
});
