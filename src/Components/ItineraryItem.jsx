import React from 'react';
import classNames from 'classnames';

export default function itneraryItem({ children, location }) {
  const listItemClass = classNames({
    'list-group-item': true,
    btn: true,
    'bg-light': true,
    'text-info': true,
    'mb-1': true
    // disabled: clicked
  });

  return (
    <button className={listItemClass} style={{ padding: '.25rem' }} href='#'>
      {children}
    </button>
  );
}
