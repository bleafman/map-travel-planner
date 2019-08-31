import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

const geocodingClient = mbxGeocoding({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
});

/**
 * Takes lngLat and returns a parsedFeature location
 * @param {number} longitude
 * @param {number} latitude
 * @returns {object} location - the parsed location object
 *  */
export async function geocodeToLocation(longitude, latitude) {
  let result, response;

  try {
    response = await geocodingClient
      .reverseGeocode({
        query: [longitude, latitude],
        types: ['place'],
        limit: 2
      })
      .send();

    if (response.body.features.length === 0) {
      throw new Error('No place result for coordinates:', [
        longitude,
        latitude
      ]);
    }
  } catch (error) {
    console.error('Error fetching reverse geocoding:', error);
    const unknownLocationText = 'Unknown location';
    return (result = {
      longitude,
      latitude,
      coordinates: [longitude, latitude],
      displayText: unknownLocationText
    });
  }

  result = parseFeature(response.body.features[0]);
  console.log('Location:', result);
  return result;
}

// geocodeToLocation(-95.4431142, 33.6875431);

/**
 * converts a Mapbox GeoJSON Feature to a easy to display format
 * @param {object} geoJSON
 * @returns {object} location - the parsed location
 * @returns {array}  location.coordinates - coordinates
 * @returns {number} location.latitude - latitude
 * @returns {number} location.longitude - longitude
 * @returns {string} location.displayText - a colloqual name of a location (ex. Dublin, Ireland)
 */
export function parseFeature(geoJSONFeature) {
  let result = {};

  const { text, geometry, context } = geoJSONFeature;
  const { coordinates } = geometry;

  result.coordinates = coordinates;
  result.longitude = coordinates[0];
  result.latitude = coordinates[1];

  // Parse contexts and assemble displayText
  let region,
    country = '';

  context.forEach(item => {
    const type = item.id.split('.');
    if (type[0] === 'country') {
      country = item.text;
    }

    if (type[0] === 'region') {
      region = item.text;
    }
  });

  // display text logic
  result.displayText = text;
  if (region && region !== text) {
    result.displayText = `${result.displayText}, ${region}`;
  }
  if (country) {
    result.displayText = `${result.displayText}, ${country}`;
  }

  return result;
}
