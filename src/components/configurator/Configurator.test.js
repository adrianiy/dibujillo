import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../global/utils/test/store.mock';
import Configurator from './Configurator';

Object.assign(navigator, {
    clipboard: {
        writeText: () => {},
    },
});

describe('Configurator private test suite', () => {
    let rendered;
    jest.spyOn(navigator.clipboard, 'writeText');

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Configurator privateRoom />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render test', () => {
        const { getByTestId } = rendered;
        const element = getByTestId('configurator');
        expect(element).toBeDefined();
    });

    test('copy link test', () => {
        const { getByTestId } = rendered;
        const button = getByTestId('link-button');
        fireEvent.click(button);
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
    });
});
