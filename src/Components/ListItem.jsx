import React, { useState } from 'react';
import classNames from 'classnames';

export default function ListItem({ children, addLocation, location }) {
  const [clicked, setClicked] = useState(false);

  const listItemClass = classNames({
    'list-group-item': true,
    btn: true,
    'bg-info': true,
    'text-light': true,
    'mb-1': true
    // disabled: clicked
  });

  return (
    <button
      href='#'
      onClick={() => {
        addLocation({ lngLat: location.coordinates });
        // setClicked(!clicked);
      }}
      className={listItemClass}
    >
      {children}
    </button>
  );
}
