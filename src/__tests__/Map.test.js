import React from 'react';
import { render } from '@testing-library/react';
import Map from '../Components/Map';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));

describe('Map component --->', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Map locations={[]} />);
    expect(getByTestId('map')).toBeInTheDocument();
  });
});
