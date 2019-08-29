import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

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

  handleClick = ({ lngLat: [longitude, latitude] }) => {
    this.setState(state => {
      const { markers } = state;
      return { markers: [...markers, { longitude, latitude }] };
    });
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
          onClick={this.handleClick}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >
          {markers.map((m, i) => (
            <Marker {...m} key={i}>
              You clicked here
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
