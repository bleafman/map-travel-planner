import React from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles/Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 6.8,
      lat: 46,
      zoom: 2.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div data-testid='map'>
        <div className='bg-dark text-light text-center rounded-lg'>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        <div className='m-1' />
        <div id='map' ref={el => (this.mapContainer = el)} />
        <div className='m-3' />
      </div>
    );
  }
}

export default Map;
