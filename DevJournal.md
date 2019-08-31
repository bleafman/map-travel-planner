## Journal

### 8/28

- Implemented Mapbox as a custom component, going to attempt to implement marker placement, time boxing it to ~2 hours and then look at other options if needed.
- Mapbox depends on HTML5 canvas and WebGL, which React is not a fan of since it directly manipulates the DOM.
- Uber maintains a React wrapper for Mapbox that's well documented and clear on the limitations. From looking at bundle size analysis and researching the Uber package, mapbox-gl vs the Uber npm package is ~27KB for a lot of value. (That and mapbox-gl is already enormous).

### 8/29

- Implemented react-map-gl (Uber map library) and was able to use CanvasLayer and was able to achieve MVP functionality.
- Would like to add animations, currently researching. There's odd behavior with the library's CanvasLayer, the lines don't animate and shrink oddly.
- It looks like I either need to switch to using GeoJSON to use animations or implement deck.gl. GeoJSON seems to make more sense for the Bonus.
- Past timebox for animation, will likely continue to Bonus and add refactor for animation as a backlog task.

## 8/30

- Was able to rapidly add features (itinerary list, reset, remove location on click)
- Ran into some challenges around responsiveness, resizing and reordering on different screens. Was able to fix with a small library (size-me) which was recommended in the react-map-gl issues.
