import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import './Gorodki.css';
import Footer from './../../components/Footer/Footer';
import galleryImage1 from './../../images/image1.jpg';
import galleryImage2 from './../../images/image2.jpg';
import galleryImage3 from './../../images/image1.jpg';
import sectionImage1 from './../../images/image1.jpg';
import sectionImage2 from './../../images/image2.jpg';
import sectionImage3 from './../../images/image1.jpg';
import sectionImage4 from './../../images/image1.jpg';
import sectionImage5 from './../../images/image2.jpg';
import QrCodeSection from './../QrCodeSection';

const Gorodki = () => {
  const galleryImages = [galleryImage1, galleryImage2, galleryImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработчик свайпа
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => {handleNext(); }, 15000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
    <div className="gorodki-container">
      {/* Крупное название и текстовое описание */}
      <h1 className="gorodki-title">Верхнечусовские Городки</h1>

      {/* Галерея изображений */}
      <div className="gorodki-gallery" {...swipeHandlers}>
        <div
          className="gallery-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Галерея ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Кнопки для переключения */}
        <div className="gallery-buttons">
          <button className="gallery-button" onClick={handlePrev}>‹</button>
          <button className="gallery-button" onClick={handleNext}>›</button>
        </div>
      </div>

      <p className="gorodki-description">
        Верхнечусовские Городки — посёлок в Пермском крае России. Входит в Чусовской городской округ. Железнодорожная станция Уралнефть.
      </p>

      {/* Секции с фото и описанием */}
      <div className="gorodki-sections">
        <div className="section">
          <img src={sectionImage1} alt="Секция 1" />
          <h1 className="gorodki-title">Секция 1</h1>
          <p className="gorodki-description">Описание для секции 1.</p>
        </div>
        <div className="section">
          <img src={sectionImage2} alt="Секция 2" />
          <h2 className="gorodki-title">Секция 2</h2>
          <p className="gorodki-description">Описание для секции 2.</p>
        </div>
        <div className="section">
          <img src={sectionImage3} alt="Секция 3" />
          <h2 className="gorodki-title">Секция 3</h2>
          <p className="gorodki-description">Описание для секции 3.</p>
        </div>
        <div className="section">
          <img src={sectionImage4} alt="Секция 4" />
          <h2 className="gorodki-title">Секция 4</h2>
          <p className="gorodki-description">Описание для секции 4.</p>
        </div>
        <div className="section">
          <img src={sectionImage5} alt="Секция 5" />
          <h2 className="gorodki-title">Секция 5</h2>
          <p className="gorodki-description">Описание для секции 5.</p>
        </div>
      </div>

      <QrCodeSection />
    </div>
    <Footer />
    </div>
  );
};

export default Gorodki;


