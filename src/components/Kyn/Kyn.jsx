import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import './../Gorodki/Gorodki.css'; 
import Footer from './../../components/Footer/Footer';
import galleryImage1 from './../../images/image1.jpg';
import galleryImage2 from './../../images/image2.jpg';
import galleryImage3 from './../../images/image1.jpg';
import galleryImage4 from './../../images/image2.jpg'; 
import galleryImage5 from './../../images/image1.jpg'; 
import galleryImage6 from './../../images/image2.jpg'; 
import QrCodeSection from './../QrCodeSection';

const Kyn = () => {
  // Первое множество изображений для первой галереи
  const firstGalleryImages = [galleryImage1, galleryImage2, galleryImage3];
  
  // Второе множество изображений для второй галереи
  const secondGalleryImages = [galleryImage4, galleryImage5, galleryImage6];
  
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  // Обработчик свайпа для первой галереи
  const swipeHandlers1 = useSwipeable({
    onSwipedLeft: () => handleNext1(),
    onSwipedRight: () => handlePrev1(),
    trackMouse: true,
  });

  // Обработчик свайпа для второй галереи
  const swipeHandlers2 = useSwipeable({
    onSwipedLeft: () => handleNext2(),
    onSwipedRight: () => handlePrev2(),
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext1(); // Автопереключение для первой галереи
    }, 25000);
    return () => clearInterval(interval);
  }, [currentIndex1]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext2(); // Автопереключение для второй галереи
    }, 25000);
    return () => clearInterval(interval);
  }, [currentIndex2]);

  const handleNext1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % firstGalleryImages.length);
  };

  const handlePrev1 = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex === 0 ? firstGalleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % secondGalleryImages.length);
  };

  const handlePrev2 = () => {
    setCurrentIndex2((prevIndex) =>
      prevIndex === 0 ? secondGalleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <din>
    <div className="gorodki-container">
      {/* Крупное название и текстовое описание */}
      <h1 className="gorodki-title">Кын</h1>
      <p className="gorodki-description">
        Кын — село в Пермском крае России. Входит в Лысьвенский городской округ.
      </p>

      {/* Первая галерея изображений */}
      <div className="gorodki-gallery" {...swipeHandlers1}>
        <div
          className="gallery-wrapper"
          style={{ transform: `translateX(-${currentIndex1 * 100}%)` }}
        >
          {firstGalleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Галерея 1 - ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Кнопки для переключения */}
        <div className="gallery-buttons">
          <button className="gallery-button" onClick={handlePrev1}>‹</button>
          <button className="gallery-button" onClick={handleNext1}>›</button>
        </div>
      </div>

      {/* Описание для первой галереи */}
      <p className="gorodki-description">
        Это текст.
      </p>

      {/* Второе крупное название и вторая галерея */}
      <h1 className="gorodki-title">Заголовок</h1>
      <div className="gorodki-gallery" {...swipeHandlers2}>
        <div
          className="gallery-wrapper"
          style={{ transform: `translateX(-${currentIndex2 * 100}%)` }}
        >
          {secondGalleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Галерея 2 - ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Кнопки для переключения */}
        <div className="gallery-buttons">
          <button className="gallery-button" onClick={handlePrev2}>‹</button>
          <button className="gallery-button" onClick={handleNext2}>›</button>
        </div>
      </div>

      {/* Описание для второй галереи */}
      <p className="gorodki-description">
        Текст.
      </p>

      <QrCodeSection />
    </div>
    <Footer />
    </din>
  );
};

export default Kyn;


