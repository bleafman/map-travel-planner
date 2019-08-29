import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        longitude: -74.1,
        latitude: 40.7128,
        zoom: 8
      },
      loading: true,
      markers: []
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

  removeMarkers = () => {
    this.setState({ markers: [] });
  };

  render() {
    const { viewport, loading, markers } = this.state;

    return (
      <div data-testid='map'>
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => {
            if (!loading) {
              this.setState({ viewport });
            }
          }}
          onClick={this.addMarker}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >
          {markers.map((m, i) => (
            <Marker {...m} key={i}>
              <MarkerPin />
            </Marker>
          ))}
        </ReactMapGL>
        <button className='btn btn-secondary m-2' onClick={this.removeMarkers}>
          Remove Markers
        </button>
      </div>
    );
  }
}

export default Map;
