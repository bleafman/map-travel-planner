import React from 'react';
import PresetListItem from './PresetListItem';

import presetLocations from '../presetLocations';
import { parseFeature } from '../utils';

export default function PresetList({ addLocation }) {
  //generate list of items
  const listItems = presetLocations.map((geoJSONFeature, i) => {
    const location = parseFeature(geoJSONFeature);

    return (
      <PresetListItem
        location={location}
        key={location.coordinates.toString()}
        addLocation={addLocation}
      >
        {location.displayText}
      </PresetListItem>
    );
  });

  return <ul className='list-group'>{listItems}</ul>;
}
