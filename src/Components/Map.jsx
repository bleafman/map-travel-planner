import React from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      },
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { viewport, loading } = this.state;

    return (
      <div data-testid='map'>
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => {
            if (!loading) {
              this.setState({ viewport });
            }
          }}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        />
      </div>
    );
  }
}

export default Map;
