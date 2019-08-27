import React from 'react';
import { render } from '@testing-library/react';
import Full from '../Components/Full';

describe('Full component --->', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<Full />);
    expect(queryByTestId('full')).toBeInTheDocument();
  });

  it('renders children elements', () => {
    const { queryByText } = render(
      <Full>
        <h1>This is a test</h1>
      </Full>
    );
    expect(queryByText('This is a test')).toBeInTheDocument();
  });

  it('defaults to not applying justify-content-center', () => {
    const withCenter = render(
      <Full center>
        <h1>This is a test</h1>
      </Full>
    );

    const withoutCenter = render(
      <Full>
        <h1>This is a test</h1>
      </Full>
    );

    expect(
      withoutCenter.container.firstChild.classList.contains(
        'justify-content-center'
      )
    ).toBe(false);
    expect(
      withCenter.container.firstChild.classList.contains(
        'justify-content-center'
      )
    ).toBe(true);
  });
});
