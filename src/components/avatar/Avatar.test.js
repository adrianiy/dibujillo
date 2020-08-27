import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Avatar from './Avatar';

describe('avatar test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Avatar image="test" title="test" />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('avatar render test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('image');
        expect(element).toBeDefined();
    });
});
