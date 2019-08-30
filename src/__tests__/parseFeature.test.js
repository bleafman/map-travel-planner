import { parseFeature } from '../utils';

const testFeature = {
  id: 'place.7679714294752110',
  type: 'Feature',
  place_type: ['place'],
  relevance: 1,
  properties: {},
  text: 'Artramon',
  place_name: 'Artramon, Wexford County, Ireland',
  bbox: [-6.526215, 52.373021, -6.450581, 52.41274],
  center: [-6.486053, 52.392809],
  geometry: {
    type: 'Point',
    coordinates: [-6.486053, 52.392809]
  },
  context: [
    {
      id: 'region.12773942253806500',
      short_code: 'IE-WX',
      wikidata: 'Q184599',
      text: 'Wexford County'
    },
    {
      id: 'country.15797503071111290',
      short_code: 'ie',
      wikidata: 'Q27',
      text: 'Ireland'
    }
  ]
};

describe('parseFeature --->', () => {
  const result = parseFeature(testFeature);

  it('Parses latitude and longitute', () => {
    expect(result.coordinates[0]).toBeCloseTo(-6.486053, 5);
    expect(result.longitude).toBeCloseTo(-6.486053, 5);
    expect(result.coordinates[1]).toBeCloseTo(52.392809, 5);
    expect(result.latitude).toBeCloseTo(52.392809, 5);
  });

  it('Parses displayText', () => {
    expect(result.displayText).toEqual('Artramon, Ireland');
  });
});
