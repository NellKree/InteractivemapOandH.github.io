import React, { useEffect, useRef} from 'react';

import './Gorodki.css';
import Footer from './../../components/Footer/Footer';
import galleryImage1 from './../../images/uppercity/upper1.jpg';
import galleryImage3 from './../../images/uppercity/upper7.jpg';
import galleryImage4 from './../../images/uppercity/upper8.jpg';
import sectionImage1 from './../../images/uppercity/upper9.png';
import sectionImage2 from './../../images/uppercity/upper4.jpg';
import sectionImage3 from './../../images/uppercity/upper5.jpg';
import sectionImage4 from './../../images/uppercity/upper10.png';
import sectionImage5 from './../../images/uppercity/upper11.png';
import QrCodeSection from './../QrCodeSection';
import Swiper from "swiper";

const Gorodki = () => {
  const galleryImages = [galleryImage1, galleryImage3, galleryImage4];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',  // Стрелка "вперёд"
        prevEl: '.swiper-button-prev',  // Стрелка "назад"
      },
      autoplay: {
        delay: 3000,
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
      <div>
        <div className="gorodki-container">
          <h1 className="gorodki-title">Верхнечусовские Городки</h1>

          {/* Галерея изображений */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {galleryImages.map((image, index) => (
                  <div className="swiper-slide" key={index}>
                    <img src={image} alt={`Изображение ${index + 1}`}/>
                  </div>
              ))}
            </div>

            {/* Пагинация */}
            <div className="swiper-pagination"></div>
          </div>

          {/* Контейнер для навигации со стрелками */}
          <div className="swiper-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

          <p className="gorodki-description">
            Верхнечусовские Городки — это посёлок с богатым историческим и культурным наследием, расположенный в
            живописном Пермском крае. Основанный в 1568 году, он стал важным центром солеварения и торговли в регионе.
            Первоначально Верхнечусовские Городки служили крепостью, защищавшей местное население от набегов, и сейчас
            на месте старого городка расположена паромная переправа, соединяющая берега реки Чусовой.
            В течение веков посёлок развивался, и соляное дело оставалось основным занятием местных жителей до конца
            XVIII века. Позже здесь началась добыча нефти, что стало важным этапом в развитии региона. Сегодня
            Верхнечусовские Городки славятся не только своей историей, но и разнообразием ремесел. Традиционные навыки
            местных мастеров, такие как ткачество, вышивание, резьба по дереву и берестоплетение, активно развиваются и
            передаются из поколения в поколение.
            Верхнечусовские Городки становятся всё более привлекательным туристическим направлением. Здесь развиваются
            экскурсионные маршруты, включая посещение исторических мест и этнопарков, где можно познакомиться с бытом и
            культурой местных жителей.
          </p>

          {/* Секции с фото и описанием */}
          <div className="gorodki-sections">
            <div className="section">
              <h1 className="gorodki-title">Берестоплетение</h1>
              <img src={sectionImage1} alt="Секция 1"/>
              <p className="gorodki-description">Берестоплетение — это древнее ремесло, которое активно практикуется в
                Верхнечусовских Городках. Мастера изготавливают разнообразные изделия из бересты, включая корзины, шляпы
                и игрушки. Этот экологически чистый материал обладает удивительными свойствами: он легкий, прочный и
                водоотталкивающий. Берестоплетение передается из поколения в поколение, сохраняя уникальные техники и
                традиции.</p>
            </div>
            <div className="section">
              <h2 className="gorodki-title">Вышивка</h2>
              <img src={sectionImage2} alt="Секция 2"/>
              <p className="gorodki-description">Вышивка является важной частью народного искусства Верхнечусовских
                Городков. Мастерицы создают красочные узоры, которые украшают одежду и домашний текстиль. Каждая вышивка
                рассказывает свою историю и передает культурное наследие региона. Уникальные техники, такие как гладь,
                крест и мережка, позволяют создавать удивительные изделия, которые привлекают внимание туристов и
                коллекционеров.</p>
            </div>
            <div className="section">
              <h2 className="gorodki-title">Ткачество</h2>
              <img src={sectionImage3} alt="Секция 3"/>
              <p className="gorodki-description">Ткачество — это еще одно традиционное ремесло, которое активно
                развивается в Верхнечусовских Городках. Мастера используют различные техники ткачества для создания
                красивых и функциональных текстильных изделий. Ткани, произведенные здесь, отличаются яркими цветами и
                уникальными узорами, отражающими природу и культуру региона. Каждый кусок ткани — это результат
                кропотливого труда и мастерства.</p>
            </div>
            <div className="section">
              <h2 className="gorodki-title">Резьба по дереву</h2>
              <img src={sectionImage4} alt="Секция 4"/>
              <p className="gorodki-description">Резьба по дереву в Верхнечусовских Городках имеет глубокие исторические
                корни. Мастера создают изумительные скульптуры, декоративные элементы и бытовые предметы. Используя
                традиционные инструменты, они вдыхают жизнь в каждую деталь, делая каждое изделие уникальным. Дерево,
                как материал, позволяет сохранить тепло и красоту природы в каждой работе.</p>
            </div>
            <div className="section">
              <h2 className="gorodki-title">Народная кукла</h2>
              <img src={sectionImage5} alt="Секция 5"/>
              <p className="gorodki-description">Народная кукла — это не просто игрушка, а символ культуры и традиций
                Верхнечусовских Городков. Эти куклы изготавливаются из натуральных материалов и часто представляют собой
                образы, которые передают историю и народные обычаи. Мастера изготавливают куклы как для детей, так и для
                оберегов, придавая им особое значение. Каждая кукла несет в себе частичку народной мудрости и душу
                народа.</p>
            </div>
          </div>

          <QrCodeSection/>
        </div>
        <Footer/>
      </div>
  );
};

export default Gorodki;




