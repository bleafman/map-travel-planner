import React from 'react';
import PropTypes from 'prop-types';

import ItineraryHeader from './ItineraryHeader';
import ItineraryItem from './ItineraryItem';

const propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired,
  removeLocation: PropTypes.func.isRequired,
  removeAllLocations: PropTypes.func.isRequired
};

export default function Itinerary({
  locations,
  removeLocation,
  removeAllLocations
}) {
  const itineraryList = locations.map((location, i) => {
    return (
      <ItineraryItem
        location={location}
        key={location.coordinates.toString() + i}
        index={i}
        removeLocation={removeLocation}
      >
        {location.displayText}
      </ItineraryItem>
    );
  });

  return (
    <>
      <ItineraryHeader removeAllLocations={removeAllLocations} />

      <ul className='list-group'>
        {itineraryList.length > 0 ? (
          itineraryList
        ) : (
          <ItineraryItem
            location={{
              displayText: 'Click a place on the map to start your trip!'
            }}
            index={0}
            removeLocation={() => {}}
          ></ItineraryItem>
        )}
      </ul>
    </>
  );
}

Itinerary.propTypes = propTypes;
