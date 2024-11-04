import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import geojson from './../../data/geojsonData';
import MapboxLanguage from "@mapbox/mapbox-gl-language";

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

    const language = new MapboxLanguage({ defaultLanguage: 'ru' });
    map.current.addControl(language);

    geojson.features.forEach((feature, index) => {
      const { geometry, properties } = feature;

      const imagesHtml = properties.images && Array.isArray(properties.images) && properties.images.length > 0
          ? properties.images.map(image => `
        <div class="swiper-slide">
          <img src="${image}" alt="${properties.title}" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;" />
        </div>
      `).join('')
          : '<div class="swiper-slide">Нет доступных изображений</div>'; // Если изображений нет, выводим сообщение

      const popupContent = `
    <div style="padding: 2px; line-height: 1.6;"> 
      <h3 style="font-weight: bold; font-size: 18px; margin-bottom: 10px;">${properties.title}</h3>
      
      <!-- Галерея изображений -->
      <div class="swiper-container" style="width: 100%; height: 200px; margin-bottom: 15px;">
        <div class="swiper-wrapper">
          ${imagesHtml}
        </div>
        <!-- Пагинация -->
        <div class="swiper-pagination" style="margin-top: 5px;"></div> <!-- Добавлен отступ сверху -->
      </div>

      <!-- Ограничение высоты текста и прокрутка с уменьшенными отступами -->
      <div class="scrollable-content" style="max-height: 150px; overflow-y: auto; margin-bottom: 10px;">
        <p>${properties.description}</p>
      </div>

      ${index < 2 ? `
        <div style="text-align: center; margin-top: 10px;"> 
          <button id="popup-button-${properties.title.replace(/\s+/g, '-').toLowerCase()}" 
                  style="margin-top: 5px; margin-bottom: 20px; padding: 10px 20px; border: none; background-color: var(--Grey800); color: var(--white); border-radius: 5px; cursor: pointer;">
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

      // Инициализация Swiper внутри попапа
      popup.on('open', () => {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 10000,
          },
        });

        const button = document.getElementById(`popup-button-${properties.title.replace(/\s+/g, '-').toLowerCase()}`);
        if (button) {
          button.addEventListener('click', () => {
            const path = index === 0
                ? '/upper-chusovskie-gorodki'
                : '/kyn';
            window.location.hash = path;
          });
        }
      });
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





