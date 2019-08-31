import React from 'react';

// Custom Components
import Container from './Components/Container';
import Full from './Components/Full';
import Split from './Components/Split';
import Map from './Components/Map';
import Itinerary from './Components/Itinerary';
import Header from './Components/Header';

// Utilities
import { geocodeToLocation } from './utils';

// Styling
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [
        { longitude: -122.39851786165565, latitude: 37.78531678199267 },
        { longitude: -122.40015469418074, latitude: 37.80051001607987 },
        { longitude: -122.4124101516789, latitude: 37.78736425435588 }
      ],
      locations: []
    };
    this.addLocation = this.addLocation.bind(this);
    this.removeLocation = this.removeLocation.bind(this);
    this.removeAllLocations = this.removeAllLocations.bind(this);
  }

  addLocation = async ({ lngLat: [longitude, latitude] }) => {
    let location = { longitude, latitude };

    try {
      location = await geocodeToLocation(longitude, latitude);
    } catch (error) {}

    this.setState(state => {
      const { locations } = state;
      return { locations: [...locations, location] };
    });
  };

  removeAllLocations = () => {
    this.setState({ locations: [] });
  };

  removeLocation = index => {
    this.setState(state => {
      const { locations } = state;
      locations.splice(index, 1);
      return { locations };
    });
  };

  render() {
    const { locations } = this.state;

    return (
      <div data-testid='app'>
        <Container>
          <Full center>
            <Header />
          </Full>
          <Full>
            <Split>
              <Map
                addLocation={this.addLocation}
                removeAllLocations={this.removeAllLocations}
                locations={locations}
              />
              <div>
                <Itinerary
                  locations={locations}
                  removeLocation={this.removeLocation}
                  removeAllLocations={this.removeAllLocations}
                />
              </div>
            </Split>
          </Full>
        </Container>
      </div>
    );
  }
}

export default App;
