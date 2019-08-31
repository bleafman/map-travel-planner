import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import PropTypes from 'prop-types';
import sizeMe from 'react-sizeme';

import MarkerPin from './MarkerPin';
import LineOverlay from './LineOverlay';

const propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired,
  addLocation: PropTypes.func.isRequired,
  size: PropTypes.instanceOf(Object).isRequired
};

function Map({ locations, addLocation, size }) {
  const startingViewport = {
    longitude: -7.0700551111549474,
    latitude: 53.14549314531982,
    zoom: 6.002436467267413
  };

  const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [width, setWidth] = useState(size.width);
  useEffect(() => {
    setWidth(size.width);
  }, [size.width]);

  /* Height is getting updated to width pixels. 
   The underlying canvas lags actual media change,
   making it slow to rerender. A little wonky but 
   works without slow responsiveness.
  */

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
        <div className='nav' style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
}

Map.propTypes = propTypes;

export default sizeMe({
  monitorHeight: true
})(Map);
