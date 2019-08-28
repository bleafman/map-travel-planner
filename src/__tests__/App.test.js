import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

it('renders app without errors', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('app')).toBeInTheDocument();
});
