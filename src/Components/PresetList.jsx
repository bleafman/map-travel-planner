import React from 'react';
import ListItem from './ListItem';

import presetLocations from '../presetLocations';
import { parseFeature } from '../utils';

export default function PresetList({ addLocation }) {
  //generate list

  const listItems = presetLocations.map((geoJSONFeature, i) => {
    const location = parseFeature(geoJSONFeature);

    return (
      <ListItem
        location={location}
        key={location.coordinates.toString()}
        addLocation={addLocation}
      >
        {location.displayText}
      </ListItem>
    );
  });

  return <ul className='list-group'>{listItems}</ul>;
}
