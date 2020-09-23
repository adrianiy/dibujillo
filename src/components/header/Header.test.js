import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../global/utils/test/store.mock';
import Header from './Header';

const mockFn = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockFn,
    }),
}));

describe('Header test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Header />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('Dibujillo');
        expect(element).toBeDefined();
    });
});

describe('Header small test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Header size="small" />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('goHome test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('home-button');
        fireEvent.click(element);
        expect(mockFn).toHaveBeenCalled();
    });

    test('menuVisibility test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('menu-button');
        expect(element).toBeDefined();
    });
});
