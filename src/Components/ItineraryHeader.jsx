import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  removeAllLocations: PropTypes.func.isRequired
};

export default function ItineraryHeader({ removeAllLocations }) {
  return (
    <>
      <h5 className='text-center'>Itinerary </h5>
      <button
        onClick={removeAllLocations}
        className='btn btn-outline-danger btn-block btn-small mb-2'
      >
        Reset
      </button>
    </>
  );
}

ItineraryHeader.propTypes = propTypes;
