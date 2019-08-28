import React from 'react';
/**
 * Compositional component for a Bootstrap Container
 */
function Container({ children }) {
  return (
    <div data-testid='container' className='container'>
      {children}
    </div>
  );
}

export default Container;
