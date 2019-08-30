import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';

import LineOverlay from './LineOverlay';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 800,
        height: 400,
        longitude: -122.39,
        latitude: 37.7128,
        zoom: 8
      },
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleViewportChange = viewport => {
    const { loading } = this.state;
    if (!loading) {
      this.setState({ viewport });
    }
  };

  render() {
    const { viewport } = this.state;
    const { locations, addLocation, removeAllLocations } = this.props;

    return (
      <div data-testid='map'>
        <ReactMapGL
          {...viewport}
          onViewportChange={this.handleViewportChange}
          onClick={addLocation}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >
          {locations.map((m, i) => (
            <Marker {...m} key={i}>
              <MarkerPin first={i === 0} />
            </Marker>
          ))}
          <LineOverlay
            locations={locations}
            compositeOperation='lighter'
            renderWhileDragging={true}
          />
        </ReactMapGL>
        <button className='btn btn-secondary m-2' onClick={removeAllLocations}>
          Remove Markers
        </button>
      </div>
    );
  }
}

export default Map;
