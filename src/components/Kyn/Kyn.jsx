import React, { useEffect, useRef } from 'react';

import './Kyn.css';
import './../Gorodki/Gorodki.css';
import Footer from './../../components/Footer/Footer';
import galleryImage1 from './../../images/cunnimagic/kyn1.jpg';
import galleryImage2 from './../../images/cunnimagic/kyn2.jpg';
import galleryImage3 from './../../images/cunnimagic/kyn3.jpg';
import galleryImage4 from './../../images/cunnimagic/kyn4.jpg';
import galleryImage5 from './../../images/cunnimagic/kyn5.jpg';
import galleryImage6 from './../../images/cunnimagic/kyn6.png';
import galleryImage7 from './../../images/cunnimagic/kyn7.png';
import galleryImage8 from './../../images/cunnimagic/kyn8.png';
import QrCodeSection from './../QrCodeSection';
import Swiper from 'swiper';

const Kyn = () => {
  // Первое множество изображений для первой галереи
  const galleryImages = [galleryImage1, galleryImage2, galleryImage6, galleryImage7, galleryImage8];

  // Второе множество изображений для второй галереи
  const secondGalleryImages = [galleryImage3, galleryImage4, galleryImage5];

  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  useEffect(() => {
    // Инициализация первой галереи
    swiperRef1.current = new Swiper('.swiper-container-1', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
      },
      autoplay: {
        delay: 5000,
      },
    });

    // Инициализация второй галереи
    swiperRef2.current = new Swiper('.swiper-container-2', {
      loop: true,
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },
      autoplay: {
        delay: 5000,
      },
    });

    return () => {
      if (swiperRef1.current) swiperRef1.current.destroy();
      if (swiperRef2.current) swiperRef2.current.destroy();
    };
  }, []);

  return (
      <div>
        <div className="kyn-container">
          {/* Крупное название и текстовое описание */}
          <h1 className="kyn-title">Кын</h1>
          <p className="kyn-description">
            Кын — это село в Пермском крае, которое славится своей богатой историей и активным развитием ремесел и туризма. Основанное в 1759 году, оно стало значимым центром металлургии благодаря Кыновскому железоделательному заводу, который работал более двухсот лет и обеспечивал металлом весь Урал.
            Село также известно своими археологическими находками: в его окрестностях были обнаружены пять из шести известных бронзовых блях с изображением медведя в жертвенной позе, относящихся к пермскому звериному стилю.
          </p>

          {/* Первая галерея */}
          <div className="swiper-container swiper-container-1">
            <div className="swiper-wrapper">
              {galleryImages.map((image, index) => (
                  <div className="swiper-slide" key={index}>
                    <img src={image} alt={`Изображение ${index + 1}`} />
                  </div>
              ))}
            </div>
            <div className="swiper-pagination swiper-pagination-1"></div>
          </div>
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-1"></div>
            <div className="swiper-button-next swiper-button-next-1"></div>
          </div>

          {/* Описание для первой галереи */}
          <p className="kyn-description">
            Природа вокруг Кына впечатляет живописными ландшафтами, включая знаменитые скалы Великан, Печка и Денежный на реке Чусовой. Эти места привлекают туристов и любителей активного отдыха, предоставляя возможности для пеших прогулок и фотосъемки.
          </p>

          {/* Вторая галерея */}
          <div className="swiper-container swiper-container-2">
            <div className="swiper-wrapper">
              {secondGalleryImages.map((image, index) => (
                  <div className="swiper-slide" key={index}>
                    <img src={image} alt={`Изображение ${index + 1}`} />
                  </div>
              ))}
            </div>
            <div className="swiper-pagination swiper-pagination-2"></div>
          </div>
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-2"></div>
            <div className="swiper-button-next swiper-button-next-2"></div>
          </div>

          {/* Описание для второй галереи */}
          <p className="kyn-description">
            В Кыну активно развиваются различные ремесла, такие как лесозаготовка и производство мебели. Местные жители занимаются также рукоделием, создавая уникальные изделия из дерева, текстиля и глины.
          </p>

          <QrCodeSection />
        </div>
        <Footer />
      </div>
  );
};

export default Kyn;





