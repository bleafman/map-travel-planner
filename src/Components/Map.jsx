import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import MarkerPin from './MarkerPin';

import LineOverlay from './LineOverlay';

export default function Map(props) {
  const { locations, addLocation, removeAllLocations } = props;

  const startingViewport = {
    width: 800,
    height: 400,
    longitude: -122.39,
    latitude: 37.7128,
    zoom: 8
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
      <button className='btn btn-secondary m-2' onClick={removeAllLocations}>
        Remove Markers
      </button>
    </div>
  );
}
