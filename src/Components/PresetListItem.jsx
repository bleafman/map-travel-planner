import React from 'react';
import classNames from 'classnames';

export default function PresetListItem({ children, addLocation, location }) {
  // const [clicked, setClicked] = useState(false);

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
      className={listItemClass}
      style={{ padding: '.25rem' }}
      href='#'
      onClick={() => {
        addLocation({ lngLat: location.coordinates });
        // setClicked(!clicked);
      }}
    >
      {children}
    </button>
  );
}
