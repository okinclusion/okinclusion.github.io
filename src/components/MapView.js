import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pin from '../images/pin.png';
import './InclusionItem.css';

const MapView = ({ center }) => {
  const position = center || [51.505, -0.09]; 

  const customIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className='mapcontainer'>
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '50%', maxWidth: '500px' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position} icon={customIcon}/>
        </MapContainer>
    </div>
  );
};

export default MapView;
