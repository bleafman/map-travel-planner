import React from 'react';

import Full from './Full';

export default function Header() {
  return (
    <>
      <Full>
        <h1
          className='text-center'
          style={{ fontFamily: 'Leckerli One, cursive', fontSize: '4.25em' }}
        >
          Mapper
        </h1>
      </Full>
      <p className='text-center'>A map-based travel planner</p>
    </>
  );
}
