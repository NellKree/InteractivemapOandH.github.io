import React, {  useEffect , useRef} from 'react';

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
  const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage6, galleryImage7, galleryImage8];

  // Второе множество изображений для второй галереи
  const secondGalleryImages = [galleryImage4, galleryImage5];

  const swiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
      },
    });

    secondSwiperRef.current = new Swiper('.swiper-container', { // Второй Swiper
      loop: true,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      autoplay: {
        delay: 3000,
      },
    });

    return () => {
      if (swiperRef.current) swiperRef.current.destroy();
      if (secondSwiperRef.current) secondSwiperRef.current.destroy();
    };
  }, []);
  return (
      <div>
        <div className="gorodki-container">
          {/* Крупное название и текстовое описание */}
          <h1 className="gorodki-title">Кын</h1>
          <p className="gorodki-description">
            Кын — это село в Пермском крае, которое славится своей богатой историей и активным развитием ремесел и туризма. Основанное в 1759 году, оно стало значимым центром металлургии благодаря Кыновскому железоделательному заводу, который работал более двухсот лет и обеспечивал металлом весь Урал.
            Село также известно своими археологическими находками: в его окрестностях были обнаружены пять из шести известных бронзовых блях с изображением медведя в жертвенной позе, относящихся к пермскому звериному стилю.
          </p>

          {/* Первая галерея */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {galleryImages.map((image, index) => (
                  <div className="swiper-slide" key={index}>
                    <img src={image} alt={`Изображение ${index + 1}`} />
                  </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="swiper-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

          {/* Описание для первой галереи */}
          <p className="gorodki-description">
            Природа вокруг Кына впечатляет живописными ландшафтами, включая знаменитые скалы Великан, Печка и Денежный на реке Чусовой. Эти места привлекают туристов и любителей активного отдыха, предоставляя возможности для пеших прогулок и фотосъемки.
          </p>

          {/* Вторая галерея
          <div className="swiper-container2">
            <div className="swiper-wrapper2">
              {secondGalleryImages.map((image, index) => (
                  <div className="swiper-slide2" key={index}>
                    <img src={image} alt={`Вторая галерея ${index + 1}`} />
                  </div>
              ))}
            </div>
            <div className="swiper-pagination2"></div>
          </div>

          <div className="swiper-navigation2">
            <div className="swiper-button-prev2"></div>
            <div className="swiper-button-next2"></div>
          </div>
*/}

          {/* Описание для второй галереи */}
          <p className="gorodki-description">
            В Кыну активно развиваются различные ремесла, такие как лесозаготовка и производство мебели. Местные жители занимаются также рукоделием, создавая уникальные изделия из дерева, текстиля и глины.
          </p>

          <QrCodeSection />
        </div>
        <Footer />
      </div>
  );
};

export default Kyn;




