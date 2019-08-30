// Adapted from Scatterplot example in react-map-gl library

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CanvasOverlay } from 'react-map-gl';

const propTypes = {
  locations: PropTypes.instanceOf(Array).isRequired,
  lngLatAccessor: PropTypes.func,
  renderWhileDragging: PropTypes.bool,
  globalOpacity: PropTypes.number,
  lineWidth: PropTypes.number,
  compositeOperation: PropTypes.string
};

const defaultProps = {
  lngLatAccessor: ({ longitude, latitude }) => [longitude, latitude],
  renderWhileDragging: true,
  lineWidth: 4,
  color: '#17a2b8',
  globalOpacity: 1,
  // Same as browser default.
  compositeOperation: 'source-over'
};

export default class LineOverlay extends PureComponent {
  /* eslint-disable max-statements */
  _redraw = ({ width, height, ctx, isDragging, project, unproject }) => {
    const {
      lineWidth,
      color,
      compositeOperation,
      renderWhileDragging,
      locations,
      lngLatAccessor
    } = this.props;

    function animateRoute(lastLocation, nextLocation) {
      const start = project(lngLatAccessor(lastLocation));
      const end = project(lngLatAccessor(nextLocation));
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.moveTo(start[0], start[1]);
      ctx.lineTo(end[0], end[1]);
      ctx.stroke();
    }

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = compositeOperation;

    // if the user isn't actively moving the map and there are more than one locations draw
    if ((renderWhileDragging || !isDragging) && locations.length > 1) {
      for (let i = 0; i < locations.length - 1; i++) {
        animateRoute(locations[i], locations[i + 1]);
      }

      // return to origin

      animateRoute(locations[locations.length - 1], locations[0]);
    }
  };
  /* eslint-enable max-statements */

  render() {
    return <CanvasOverlay redraw={this._redraw} />;
  }
}

LineOverlay.displayName = 'LineOverlay';
LineOverlay.propTypes = propTypes;
LineOverlay.defaultProps = defaultProps;
