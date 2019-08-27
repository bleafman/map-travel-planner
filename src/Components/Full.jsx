import React from 'react';
import classNames from 'classnames';

/**
 * Compositional wrapper to give a "full" row width to contents.
 * @param center will apply justify-content-center and d-flex.
 */
function Full({ children, center }) {
  const fullClass = classNames({
    row: true,
    dflex: center,
    'justify-content-center': center
  });

  return (
    <div className={fullClass}>
      <div className='col'></div>
      <div className='col-auto'>{children}</div>
      <div className='col'></div>
    </div>
  );
}

export default Full;
