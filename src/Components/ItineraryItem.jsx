import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  removeLocation: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired
};

export default function itineraryItem({ removeLocation, index, location }) {
  const listItemClass = classNames({
    'list-group-item': true,
    btn: true,
    'bg-light': true,
    'text-info': true,
    'mb-1': true
  });

  return (
    <button
      className={listItemClass}
      onClick={() => {
        removeLocation(index);
      }}
      style={{ padding: '.25rem' }}
      href='#'
    >
      {location.displayText}
    </button>
  );
}

itineraryItem.propTypes = propTypes;
