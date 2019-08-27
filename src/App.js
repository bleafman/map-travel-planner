import React from 'react';

// Custom Components
import Container from './Components/Container';
import Full from './Components/Full';

// Styling
import './App.css';

function App() {
  return (
    <div data-testid='app'>
      <Container>
        <Full center>
          <div>
            <h1>Trip Planner!</h1>
            <div>
              <h3>Hello Map App!</h3>
            </div>
          </div>
        </Full>
        <Full>
          <div>
            <h1>Hello Map App!</h1>
          </div>
        </Full>
        <Full center>
          <div>
            <h1>Hello Map App!</h1>
          </div>
        </Full>
      </Container>
    </div>
  );
}

export default App;
