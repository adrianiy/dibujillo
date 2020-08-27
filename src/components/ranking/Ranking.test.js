import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Ranking from './Ranking';

describe('Ranking test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Ranking />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('ranking coming soon...');
        expect(element).toBeDefined();
    });
});
