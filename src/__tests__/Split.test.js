import React from 'react';
import { render } from '@testing-library/react';
import Split from '../Components/Split';

describe('Split component --->', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <Split>
        <h1>This is a test</h1>
        <h1>This is a test</h1>
      </Split>
    );
    expect(queryByTestId('split')).toBeInTheDocument();
  });

  /* TODO: create-react-app presets /jsdom are being difficult and not disabling 
  console.error for individual tests (only globally). Tests passes but excluding for now.
  */
  xit('throws error if passed incorrect number of children children elements', () => {
    expect(() => {
      render(
        <Split>
          <h1>This is a test</h1>
        </Split>
      );
    }).toThrowError();
  });
});
