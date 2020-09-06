import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Canvas from './Canvas';

describe('Canvas test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Canvas />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('Canvas coming soon...');
        expect(element).toBeDefined();
    });
});
