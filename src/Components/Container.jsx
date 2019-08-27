import React from 'react';

/**
 * Compositional Component for a Bootstrap Container
 */
function Container({ children }) {
  return <div className='container'>{children}</div>;
}

export default Container;
