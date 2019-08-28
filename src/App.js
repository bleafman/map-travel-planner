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
          <h1>Welcome to the Interactive Travel Planner</h1>
          <p>A map-based for travel itinerary planning</p>
        </Full>
        <Full>
          <div>
            <h2>Map</h2>
          </div>
        </Full>
      </Container>
    </div>
  );
}

export default App;
