import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import sizeMe from 'react-sizeme';

import MarkerPin from './MarkerPin';
import LineOverlay from './LineOverlay';

function Map({ locations, addLocation, size }) {
  const startingViewport = {
    longitude: -7.0700551111549474,
    latitude: 53.14549314531982,
    zoom: 6.002436467267413
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [width, setWidth] = useState(size.width);
  useEffect(() => {
    setWidth(size.width);
  }, [size.width]);

  // Spent a lot of time trying to figure out responsiveness
  // This is works for rapid responsiveness
  // updating from onViewportChange lags

  const [height, setHeight] = useState(size.width);
  useEffect(() => {
    setHeight(size.width);
  }, [size.width]);

  const [viewport, setViewport] = useState(startingViewport);

  const handleViewportChange = viewport => {
    if (loading) {
      return;
    }
    let { width, height, ...rest } = viewport;
    setWidth(size.width);
    setHeight(size.height);
    setViewport({ ...rest });
  };

  return (
    <div data-testid='map'>
      <ReactMapGL
        {...viewport}
        width={width}
        height={height}
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

export default sizeMe({
  monitorHeight: true
})(Map);
