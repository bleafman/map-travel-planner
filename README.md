# map-travel-planner

Interactive map for travel itinerary planning.

## Journal

### 8/28 - 8/29

- Implemented Mapbox as a custom component, going to attempt to implement marker placement, time boxing it to ~2 hours and then look at other options if needed.
- Mapbox depends on HTML5 canvas and WebGL, which React is not a fan of since it directly manipulates the DOM.
- Uber maintains a React wrapper for Mapbox that's well documented and clear on the limitations. From looking at bundle size analysis and researching the Uber package, mapbox-gl vs the Uber npm package is ~27KB for a lot of value. (That and mapbox-gl is already enormous).
