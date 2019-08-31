import React from 'react';
import PropTypes from 'prop-types';

import ItineraryHeader from './ItineraryHeader';
import ItineraryItem from './ItineraryItem';

const propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired,
  removeAllLocations: PropTypes.func.isRequired
};

export default function Itinerary({ locations, removeAllLocations }) {
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
    <>
      <ItineraryHeader removeAllLocations={removeAllLocations} />
      <ul className='list-group'>
        {itineraryList.length === 0 ? (
          <ItineraryItem>
            Click a place on the map to start your trip!
          </ItineraryItem>
        ) : (
          itineraryList
        )}
      </ul>
    </>
  );
}

Itinerary.propTypes = propTypes;
