import React from 'react';
import { render } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';
import MarkerPin from '../Components/MarkerPin';

describe('MarkerPin component --->', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<MarkerPin />);
    expect(getByTestId('marker-pin')).toBeInTheDocument();
  });
});
