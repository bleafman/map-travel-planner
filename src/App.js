import React from 'react';

// Custom Components
import Container from './Components/Container';
import Full from './Components/Full';
import Split from './Components/Split';
import Map from './Components/Map';
import PresetList from './Components/PresetList';
import Itinerary from './Components/Itinerary';

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
          {/* Start of Title */}
          <Full center>
            <Full>
              <h1 className='text-center'>Mapper</h1>
            </Full>
            <p className='text-center'>A map-based travel planner</p>
          </Full>
          {/* End of Title */}
          {/* Start of Map */}
          <Full center>
            <Map
              addLocation={this.addLocation}
              removeAllLocations={this.removeAllLocations}
              locations={locations}
            />
          </Full>
          {/* End of Map */}
          <div className='m-4 ' />
          {/* Start of Controls*/}
          <Container>
            <Full>
              <Split>
                <div>
                  <h3 className='text-center'>Preset Options</h3>
                  <PresetList />
                </div>
                <div>
                  <h3 className='text-center'>Itinerary </h3>
                  <Itinerary />
                </div>
              </Split>
            </Full>
          </Container>
          {/* End of Controls */}
        </Container>
        {/* Start of DevTools */}
        <button
          className='btn btn-secondary m-2'
          onClick={this.removeAllLocations}
        >
          Remove Markers
        </button>
        {/* End of DevTools */}
      </div>
    );
  }
}

export default App;
