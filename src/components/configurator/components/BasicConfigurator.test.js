import React from 'react';
import { fireEvent } from '@testing-library/react';
import getMockProvider from '../../../global/utils/test/store.mock';
import { BasicPrivateConfiguration } from './BasicConfigurator';

describe('Players section test suite', () => {
    let rendered;
    const matchConfig = {
        name: '',
    };
    const updateMatchConfig = jest.fn();

    beforeEach(() => {
        ({ rendered } = getMockProvider(<BasicPrivateConfiguration
            matchConfig={matchConfig}
            updateMatchConfig={updateMatchConfig}
        />, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('change name test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('name');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(updateMatchConfig).toHaveBeenCalledWith({ name: 'test' });
    });
});
