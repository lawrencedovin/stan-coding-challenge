import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Series from './Series';

describe('<Series />', () => {
  test('it should mount', () => {
    render(<Series />);
    
    const series = screen.getByTestId('Series');

    expect(series).toBeInTheDocument();
  });
});