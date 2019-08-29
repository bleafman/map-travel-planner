import React from 'react';

// Custom Components
import Container from './Components/Container';
import Full from './Components/Full';
import Map from './Components/Map';

// Styling
import './App.css';

function App() {
  return (
    <div data-testid='app'>
      <Container>
        <Full center>
          <Full>
            <h1>Mapper</h1>
          </Full>
          <p>A map-based travel planner</p>
        </Full>
        <Full>
          <Map />
        </Full>
      </Container>
    </div>
  );
}

export default App;
