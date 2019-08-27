import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Components/Container';

describe('Container component --->', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Container />);
    expect(queryByTestId('container')).toBeInTheDocument();
  });

  it('renders children elements', () => {
    const { queryByText } = render(
      <Container>
        <h1>This is a test</h1>
      </Container>
    );
    expect(queryByText('This is a test')).toBeInTheDocument();
  });
});
