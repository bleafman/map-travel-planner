import React from 'react';
import '../styles/Split.css';
import { SizeMe } from 'react-sizeme';

const propTypes = {
  children: arrayOfLength.bind(null, 2)
};

/**
 * Compositional component for a responsive 33/66 split bootstrap row
 */
export default function Split({ children }) {
  if (React.Children.count(children) !== 2) {
    throw new Error('Split expects exactly two children');
  }

  const childrenArray = React.Children.toArray(children),
    left = childrenArray[0],
    right = childrenArray[1];

  return (
    <div data-testid='split' className='split'>
      <div className='row d-flex'>
        <div className='col-sm-8 order-sm-2 bg-primary'>{left}</div>
        <div className='col-sm-4 flex-fill'>{right}</div>
      </div>
    </div>
  );
}

Split.propTypes = propTypes;

function arrayOfLength(expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length;

  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
}
