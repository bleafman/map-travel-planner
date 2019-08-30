import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';

import LineOverlay from './LineOverlay';

export default function Map(props) {
  const { locations, addLocation } = props;

  const startingViewport = {
    width: 800,
    height: 400,
    longitude: -7.786320276331708,
    latitude: 53.33108467771086,
    zoom: 5
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
