import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';
import LineOverlay from './LineOverlay';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '40vw',
        height: '60vh',
        longitude: -7.0700551111549474,
        latitude: 53.14549314531982,
        zoom: 6.002436467267413
      }
    };
  }
  // const startingViewport = {
  //   width: '40vw',
  //   height: '60vh',
  //   longitude: -7.0700551111549474,
  //   latitude: 53.14549314531982,
  //   zoom: 6.002436467267413
  // };

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  // const [viewport, setViewport] = useState(startingViewport);

  // const handleViewportChange = viewport => {
  //   if (loading) {
  //     return;
  //   }
  //   let { width, ...rest } = viewport;
  //   width = size.width;
  //   setViewport({ width, ...rest });
  // };

  render() {
    return (
      <div data-testid='map'>
        <ReactMapGL
          {...viewport}
          onViewportChange={handleViewportChange}
          onClick={addLocation}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle={'mapbox://styles/mapbox/streets-v9'}
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
      </div>
    );
  }
}

export default Map;
