/**
 * converts a Mapbox GeoJSON Feature to a easy to display format
 * @param {object} geoJSON
 * @returns {object} location - the parsed location
 * @returns {array}  location.coordinates - coordinates
 * @returns {number} location.latitude - latitude
 * @returns {number} location.longitude - longitude
 * @returns {string} location.displayText - the American colloqual name of a location (ex. Dublin, Ireland)
 */
export function parseFeature(geoJSONFeature) {
  let result = {};

  const { text, geometry, context } = geoJSONFeature;
  const { coordinates } = geometry;

  result.coordinates = coordinates;
  result.latitude = coordinates[1];
  result.longitude = coordinates[0];
  result.displayText = text;

  context.forEach(item => {
    const type = item.id.split('.');
    if (type[0] === 'country') {
      result.displayText = `${result.displayText}, ${item.text}`;
    }
  });

  return result;
}
