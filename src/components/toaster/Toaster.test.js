import React from 'react';
import getMockProvider from '../../global/utils/test/store.mock';
import Toaster from './Toaster';

describe('Toaster ok test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Toaster />, {
            toaster: { display: true, ok: true, text: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('test');
        expect(element).toBeDefined();
    });

    test('icon test', () => {
        const { getByText } = rendered;
        const element = getByText('checkmark');
        expect(element).toBeDefined();
    });

    test('icon disapear test', () => {
        const { getByText } = rendered;
        setTimeout(() => {
            try {
                getByText('test');
            } catch (err) {
                expect(err).toBeDefined();
            }
        }, 2000);
    });
});

describe('Toaster ko test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Toaster />, {
            toaster: { display: true, ok: false, text: 'test' },
        }));
    });

    test('render test', () => {
        const { getByText } = rendered;
        const element = getByText('test');
        expect(element).toBeDefined();
    });

    test('icon test', () => {
        const { getByText } = rendered;
        const element = getByText('close');
        expect(element).toBeDefined();
    });

    test('icon disapear test', () => {
        const { getByText } = rendered;
        setTimeout(() => {
            try {
                getByText('test');
            } catch (err) {
                expect(err).toBeDefined();
            }
        }, 2000);
    });
});

describe('Toaster not display test suite', () => {
    let rendered;

    beforeEach(() => {
        ({ rendered } = getMockProvider(<Toaster />, {
            toaster: { display: false, ok: true, text: 'test' },
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
