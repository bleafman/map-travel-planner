import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import MarkerPin from './MarkerPin';

import LineOverlay from './LineOverlay';

export default function Map(props) {
  const { locations, addLocation } = props;

  const startingViewport = {
    width: '70vw',
    height: '70vh',
    longitude: -7.0700551111549474,
    latitude: 53.14549314531982,
    zoom: 6.002436467267413
  };

  const [viewport, setViewport] = useState(startingViewport);

  const handleViewportChange = viewport => {
    setViewport({ ...viewport });
  };

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
