import './Home.css';
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';
import QrCodeSection from './QrCodeSection';
import projectImage from './../images/image1.png';

import galleryImage1 from './../images/image2.png';
import galleryImage2 from './../images/image3.png';
import galleryImage3 from './../images/image4.png';
import galleryImage4 from './../images/image5.png';
import galleryImage5 from './../images/image6.png';

const Home = () => {
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

    const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5];

    return (
        <div>
            <Header/>
            <div className="home-block">
                {/* Секция с описанием проекта */}
                <div className="project-section">
                    <img src={projectImage} alt="Описание проекта" className="project-image"/>
                    <div className="project-description">
                        <h2>О проекте</h2>
                        <p>Наш проект «Вёсла-ремёсла» — это межкампусный проект НИУ ВШЭ, который стремится изучить и
                            сохранить уникальные традиции ремёсел и культуры в разных уголках России.</p>
                    </div>
                </div>

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

                <QrCodeSection/>
            </div>

            <Footer/>
        </div>
    );
};

export default Home;










