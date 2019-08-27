import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../Components/Container';
import Full from '../Components/Full';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Container>
      <Full>Test Text</Full>
    </Container>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
