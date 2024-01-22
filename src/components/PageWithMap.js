import React from 'react';
import { Link } from 'react-router-dom';
import MapView from './MapView';

const PageWithMap = () => {
  return (
    <div>
      <h1>Your Page with Map</h1>
      <MapView />
      <Link to="/map/40.7128/-74.0060">View Map in New York</Link>
      <Link to="/map/34.0522/-118.2437">View Map in Los Angeles</Link>
    </div>
  );
};

export default PageWithMap;