import React from 'react';

// Custom Components
import Container from './Components/Container';
import Full from './Components/Full';
import Map from './Components/Map';

// Styling
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presets: [
        { longitude: -122.39851786165565, latitude: 37.78531678199267 },
        { longitude: -122.40015469418074, latitude: 37.80051001607987 },
        { longitude: -122.4124101516789, latitude: 37.78736425435588 }
      ],
      locations: []
    };
    this.addLocation = this.addLocation.bind(this);
    this.removeAllLocations = this.removeAllLocations.bind(this);
  }

  addLocation = ({ lngLat: [longitude, latitude] }) => {
    this.setState(state => {
      const { locations } = state;
      return { locations: [...locations, { longitude, latitude }] };
    });
  };

  removeAllLocations = () => {
    this.setState({ locations: [] });
  };

  render() {
    const { locations } = this.state;

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
            <Map
              addLocation={this.addLocation}
              removeAllLocations={this.removeAllLocations}
              locations={locations}
            />
          </Full>
        </Container>
      </div>
    );
  }
}

export default App;
