import React, { PureComponent } from 'react';
import { CanvasOverlay, Scatter } from 'react-map-gl';

export default class LineOverlay extends PureComponent {
  _redraw({ width, height, ctx, isDragging, project, unproject }) {
    const {
      points,
      color = '#17a2b8',
      lineWidth = 10,
      renderWhileDragging = true
    } = this.props;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';

    if (points.length > 0) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.beginPath();
      points.forEach(point => {
        const { latitude, longitude } = point;
        const pixel = project([latitude, longitude]);
        console.log('plotting line to', pixel);
        ctx.lineTo(pixel[0], pixel[1]);
      });
      ctx.stroke();
    }
  }

  render() {
    return <CanvasOverlay redraw={this._redraw.bind(this)} />;
  }
}
