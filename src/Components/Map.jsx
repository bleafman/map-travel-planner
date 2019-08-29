import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';
import LineOverlay from './LineOverlay';

import ScatterplotOverlay from './ScatterplotOverlay';

const CITY_LOCATIONS = [
  [-122.39851786165565, 37.78736425435588],
  [-122.40015469418074, 37.78531678199267],
  [-122.4124101516789, 37.80051001607987]
];

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
    const { viewport, markers, locations } = this.state;

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
          <ScatterplotOverlay
            locations={CITY_LOCATIONS}
            dotRadius={10}
            globalOpacity={1}
            compositeOperation='lighter'
            dotFill='blue'
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
