import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css'; // Import Bootstrap CSS

function App() {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };
  useEffect(() => {
    loadMap();

  }, []);

  const loadMap = () => {
    const google = window.google;
  
    if (!google) {
      console.error("Google Maps JavaScript API library must be loaded.");
      return;
    }
  
    const mapContainer = document.getElementById('map');
  
    // Remove the gMap variable
    new google.maps.Map(mapContainer, {
      center: { lat: 0, lng: 0 }, // Centered at (0, 0) by default
      zoom: 8, // Initial zoom level
    });
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1> Google Maps: An amazing tool used every day!</h1>
      </header>
      {/* Add your Google Maps API key here */}
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default App;

