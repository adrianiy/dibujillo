import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Button from './Button';

describe('Button with icon test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Button icon="test-icon">test-text</Button>, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render text test', () => {
        const { getByText } = rendered;
        const text = getByText('test-text');
        expect(text).toBeDefined();
    });

    test('render icon test', () => {
        const { getByText } = rendered;
        const icon = getByText('test-icon');
        expect(icon).toBeDefined();
    });
});

describe('Button without icon test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Button>test-text</Button>, {
            user: { loggedIn: true, name: 'test' },
        }));
    });

    test('render text test', () => {
        const { getByText } = rendered;
        const text = getByText('test-text');
        expect(text).toBeDefined();
    });

    test('render icon fail test', () => {
        const { getByText } = rendered;
        try {
            getByText('test-icon');
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
});
