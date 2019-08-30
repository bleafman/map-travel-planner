import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';

import LineOverlay from './LineOverlay';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        longitude: -122.39,
        latitude: 37.7128,
        zoom: 8
      },
      loading: true,
      markers: [],
      locations: [
        { longitude: -122.39851786165565, latitude: 37.78531678199267 },
        { longitude: -122.40015469418074, latitude: 37.80051001607987 },
        { longitude: -122.4124101516789, latitude: 37.78736425435588 }
      ]
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  addMarker = ({ lngLat: [longitude, latitude] }) => {
    this.setState(state => {
      const { markers } = state;
      return { markers: [...markers, { longitude, latitude }] };
    });
  };

  handleViewportChange = viewport => {
    const { loading } = this.state;
    if (!loading) {
      this.setState({ viewport });
    }
  };

  removeMarkers = () => {
    this.setState({ markers: [] });
  };

  render() {
    const { viewport, markers } = this.state;

    return (
      <div data-testid='map'>
        <ReactMapGL
          {...viewport}
          onViewportChange={this.handleViewportChange}
          onClick={this.addMarker}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >
          {markers.map((m, i) => (
            <Marker {...m} key={i}>
              <MarkerPin first={i === 0} />
            </Marker>
          ))}
          <LineOverlay
            locations={markers}
            compositeOperation='lighter'
            renderWhileDragging={true}
          />
        </ReactMapGL>
        <button className='btn btn-secondary m-2' onClick={this.removeMarkers}>
          Remove Markers
        </button>
      </div>
    );
  }
}

export default Map;
