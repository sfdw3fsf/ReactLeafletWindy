import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Polygon } from 'react-leaflet';
import { Icon } from "leaflet";
import './App.css';

console.log(L.version); // 1.9.4

// Create a new instance of Leaflet with a different name
var Leaflet = L.noConflict();

console.log(L.version); // undefined (original L object is no longer available)
console.log(Leaflet.version); // 1.9.4

const WindyMap = ({ markers, handleNearbyShips, handleDeleteMarker }) => {
  const [polygons, setPolygons] = useState([]);
  useEffect(() => {
    // Fetch GeoJSON data from MapTiler Cloud API
    fetch('https://api.maptiler.com/data/6f17007e-d2df-464b-99e5-ebdc8f509a31/features.json?key=z8EGLoSxNYHRtDu6whWI')
      .then(response => response.json())
      .then(data => {
        // Assuming your GeoJSON data has a "features" property containing an array of features
        const extractedPolygons = data.features.map(feature => feature.geometry.coordinates);
        console.log(extractedPolygons)
        setPolygons(extractedPolygons);
      })
      .catch(error => console.error('Error fetching GeoJSON data:', error));
  }, []);


  useEffect(() => {
    const options = {
      key: 'vKh7O0zgK1yCw0yGkO2WSMZEnwFEdTSd', // Replace with your Windy API key
      verbose: true,
      zoom: 10
    };

    // Load Leaflet script
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
    leafletScript.async = true;
    document.body.appendChild(leafletScript);

    // Load Windy API script
    const windyScript = document.createElement('script');
    windyScript.src = 'https://api.windy.com/assets/map-forecast/libBoot.js';
    windyScript.async = true;
    document.body.appendChild(windyScript);
    const customIcon = new Leaflet.Icon({ // Use Leaflet instead of L for the custom icon
      iconUrl: require("./speedboat.png"),
      iconSize: [28, 28]
    });


    // Initialize Windy API and Leaflet map
    leafletScript.onload = () => {
      document.body.appendChild(windyScript);
    }

    windyScript.onload = () => {
      window.windyInit(options, windyAPI => {
        const { map } = windyAPI;
        fetch('https://api.maptiler.com/data/6f17007e-d2df-464b-99e5-ebdc8f509a31/features.json?key=z8EGLoSxNYHRtDu6whWI')
          .then(response => response.json())
          .then(data => {
            const geojsonFeature = {
              type: "FeatureCollection",
              features: data.features
            };

            const leafletPolygons = L.geoJSON(geojsonFeature, {
              style: {
                fillColor: 'transparent',
                color: '#89C2D9'
              }
            });

            leafletPolygons.addTo(map);
          })
          .catch(error => console.error('Error fetching GeoJSON data:', error));
        // Add markers to the Leaflet map with popup form
        markers.forEach(marker => {

          const popupContent = `
              <div class="popUpContainer">
              <div class="imgInfor">
              <div class='shipImg'>
              <img src=${marker.img} alt="Ship" />
            </div>
            <div class='shipInfo'>
              <div class='nameNum'>
                <span>${marker.shipName} - ${marker.shipNum}</span>
              </div>
              <div class='position'>
                <span><label>Position: </label>${marker.position}</span>
              </div>
              <div class='lengthPower'>
                <span><label>Length: </label>${marker.shipLength}m</span>
                <span><label>Power: </label>${marker.power}</span>
              </div>
              <div class='ownerNote'>
                <span><label>OwnerPhone: </label>${marker.ownerPhone}</span>
                <span>${marker.note}</span>
              </div>
            </div></div>
                <div class='ButtonPart'>
                <button class='popupButton nearby' onclick="handleNearbyShips(${marker})">NearBy Ships</button>
                <button class='popupButton update'>Update</button>
                <button class='popupButton delete' onclick="handleDeleteMarker(${marker.id})">Delete</button>
                </div>
              </div>
            `;
          Leaflet.marker(marker.position, { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent);

        });
      });

    };
    fetch('https://api.maptiler.com/data/6f17007e-d2df-464b-99e5-ebdc8f509a31/features.json?key=z8EGLoSxNYHRtDu6whWI')
      .then(response => response.json())
      .then(data => {
        // Assuming your GeoJSON data has a "features" property containing an array of features
        const extractedPolygons = data.features.map(feature => feature.geometry);
        setPolygons(extractedPolygons);
      })
      .catch(error => console.error('Error fetching GeoJSON data:', error));


    // Cleanup: Remove dynamically added scripts
    return () => {

      document.body.removeChild(windyScript);
    };
  }, [markers, handleNearbyShips, handleDeleteMarker]);

  return <div id="windy">

  </div>;
};

export default WindyMap;
