import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Landing from './Landing';

describe('Landing test suite', () => {
    let rendered;

    beforeEach(() => {
        rendered = render(<Landing/>);
    });

    test('renders Landing test', () => {
        const { getByText } = rendered;
        const inputTitleElement = getByText(/Crea un nuevo lienzo!/i);
        expect(inputTitleElement).toBeInTheDocument();
    });

    test('input onChange action test', () => {
        const { getByTestId } = rendered;
        const input = getByTestId('room-id');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toEqual('test');
    });
});
