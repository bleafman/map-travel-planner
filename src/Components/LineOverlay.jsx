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
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.moveTo(start[0], start[1]);
      ctx.lineTo(end[0], end[0]);
      ctx.stroke();
    }

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = compositeOperation;

    // if the user isn't actively moving the map and there are more than two locations draw
    if ((renderWhileDragging || !isDragging) && locations.length > 2) {
      // initalize path at origin location
      const start = project(lngLatAccessor(locations[0]));
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.moveTo(start[0], start[1]);

      // iterate through all remaining locations
      for (let i = 1; i < locations.length; i++) {
        const pixel = project(lngLatAccessor(locations[i]));
        ctx.lineTo(pixel[0], pixel[1]);
      }

      // return to origin and draw
      ctx.lineTo(start[0], start[1]);
      ctx.stroke();
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
