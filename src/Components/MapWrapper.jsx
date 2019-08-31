import React from 'react';
import { SizeMe } from 'react-sizeme';
import Map from './Map';

export default function MapWrapper({ locations, addLocation }) {
  return (
    <SizeMe monitorHeight>
      {({ size }) => {
        return (
          <Map locations={locations} addLocation={addLocation} size={size} />
        );
      }}
    </SizeMe>
  );
}
