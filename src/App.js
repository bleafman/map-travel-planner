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
          <h1>Welcome to the Interactive Travel Planner</h1>
          <p>A map-based travel itinerary</p>
        </Full>
        <Full>
          <h2>Map</h2>
        </Full>
        <Full center>
          <Map />
        </Full>
      </Container>
    </div>
  );
}

export default App;
