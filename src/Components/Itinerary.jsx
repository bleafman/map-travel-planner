import React from 'react';
import PropTypes from 'prop-types';

import ItineraryItem from './ItineraryItem';

const propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired
};

export default function Itinerary({ locations }) {
  // generate itinerary

  const itineraryList = locations.map((location, i) => {
    return (
      <ItineraryItem
        location={location}
        key={location.coordinates.toString() + i}
      >
        {location.displayText}
      </ItineraryItem>
    );
  });

  return (
    <ul className='list-group'>
      {itineraryList.length === 0 ? (
        <ItineraryItem>
          Click a place on the map to start your trip!
        </ItineraryItem>
      ) : (
        itineraryList
      )}
    </ul>
  );
}

Itinerary.propTypes = propTypes;
