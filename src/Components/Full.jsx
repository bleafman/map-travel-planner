import React from 'react';
import classNames from 'classnames';

/**
 * Compositional wrapper to give a "full" row width to contents.
 * @param center will apply justify-content-center
 */
function Full({ children, center }) {
  const fullClass = classNames({
    row: true,
    'justify-content-center': center,
    'd-flex': center
  });

  return (
    <div data-testid='full' className={fullClass}>
      <div className='col'></div>
      <div className='col-10'>{children}</div>
      <div className='col'></div>
    </div>
  );
}

export default Full;
