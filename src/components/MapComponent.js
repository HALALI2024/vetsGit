import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapComponent.css';

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 37.7749, // Replace with actual latitude
    lng: -122.4194, // Replace with actual longitude
};

export default function MapComponent() {
    return (
        <div className="map-component">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
