import React from 'react';

// Custom Components
import Container from './Components/Container';
import Full from './Components/Full';
import Split from './Components/Split';
import Map from './Components/Map';
import PresetList from './Components/PresetList';
import Itinerary from './Components/Itinerary';
import ItineraryTitle from './Components/ItineraryHeader';

// Utilities
import { geocodeToLocation } from './utils';

// Styling
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

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

  render() {
    const { locations } = this.state;

    return (
      <div data-testid='app'>
        <Container>
          {/* Start of Title */}
          <Full center>
            <Full>
              <h1 className='text-center'>Mapper</h1>
            </Full>
            <p className='text-center'>A map-based travel planner</p>
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
