import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';  
import 'mapbox-gl/dist/mapbox-gl.css';

import geojson from './../../data/geojsonData';

mapboxgl.accessToken = 'pk.eyJ1IjoibmVsbGtyZWUiLCJhIjoiY2wzdWJmZWh4MWdmNzNjbHRpbzhodzdjaSJ9.lZeRgnRsw4XbSRIXj2un6Q';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const perm = { lng: 56.2502, lat: 58.0105 };
  const zoom = 6;

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [perm.lng, perm.lat],
      zoom: zoom,
      maxBounds: [
        [54.0, 56.0], // юго-западный угол
        [59, 60.0]  // северо-восточный угол
      ],
      maxZoom: 12,
      minZoom: 4
    });

    geojson.features.forEach((feature, index) => {
      const { geometry, properties } = feature;
    
      const popupContent = `
      <div>
        <h3>${properties.title}</h3>
        <img src="${properties.image}" alt="${properties.title}" style="width: 100%; height: auto; border-radius: 8px;"/>
        <p>${properties.description}</p>
        ${index < 2 ? `
          <div style="text-align: center;"> 
            <button id="popup-button-${properties.title.replace(/\s+/g, '-').toLowerCase()}" 
                    style="margin-top: 10px; padding: 5px 10px; border: none; background-color: var(--Grey800); color: var(--white); border-radius: 5px; cursor: pointer;">
              Открыть страницу
            </button>
          </div>` : ''}
      </div>
    `;
    
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(popupContent);
    
      const marker = new mapboxgl.Marker({ color: 'var(--Grey800)' })
        .setLngLat(geometry.coordinates)
        .setPopup(popup)  
        .addTo(map.current);
    
      if (index < 2) {
        popup.on('open', () => {
          const button = document.getElementById(`popup-button-${properties.title.replace(/\s+/g, '-').toLowerCase()}`);
          if (button) {
            button.addEventListener('click', () => {
              const path = index === 0 
                ? '/upper-chusovskie-gorodki'
                : '/kyn'; 
              window.location.href = path; 
            });
          }
        });
      }
    });
    
    window.addEventListener('resize', () => {
      map.current.resize();
    });
  }, []);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}





