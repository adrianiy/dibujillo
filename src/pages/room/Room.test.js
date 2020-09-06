import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../global/utils/test/store.mock';
import Room from './Room';

Storage.prototype.getItem = jest.fn(() => JSON.stringify({ name: 'test' }));

describe('Room test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Room />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render rooms test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('room');
        expect(element).toBeDefined();
    });

    test('rankingToggle test', () => {
        const { getByTestId, getByText } = rendered;
        const expandedIcon = getByText('first_page');
        expect(expandedIcon).toBeDefined();
        const element = getByTestId('ranking-toggle');
        fireEvent.click(element);
        const contractedIcon = getByText('last_page');
        expect(contractedIcon).toBeDefined();
    });
});
