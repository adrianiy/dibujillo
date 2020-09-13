import React from 'react';
import { fireEvent } from '@testing-library/react';
import UserMenu from './UserMenu';
import getMockProvider from '../../global/utils/test/store.mock';

const mockSignOut = jest.fn();

jest.mock('react-google-login', () => ({
    useGoogleLogout: () => ({ loaded: true, signOut: mockSignOut }),
}));

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

    test('render theme selector test', () => {
        const { getByTestId } = rendered;
        const themeButton = getByTestId('theme-button');
        fireEvent.click(themeButton);
        const backButton = getByTestId('back-button');
        expect(backButton).toBeDefined();
        fireEvent.click(backButton);
        expect(getByTestId('theme-button')).toBeDefined();
    });

    test('logout test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('logout-button');
        fireEvent.click(button);
        expect(mockSignOut).toHaveBeenCalled();
    });
});

describe('UserMenu not loggedIn test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<UserMenu />, {
            user: { loggedIn: false, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        try {
            getByText('test');
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});
