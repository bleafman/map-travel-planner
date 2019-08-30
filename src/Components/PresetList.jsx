import React from 'react';
import ListItem from './ListItem';

import presetLocations from '../presetLocations';
import { parseFeature } from '../utils';

export default function PresetList() {
  //generate list

  const listItems = presetLocations.map((geoJSONFeature, i) => {
    const location = parseFeature(geoJSONFeature);

    return (
      <ListItem key={(location.latitude + location.longitude).toString()}>
        {location.displayText}
      </ListItem>
    );
  });

  return <ul className='list-group'>{listItems}</ul>;
}
