import './Home.css'; 
import React, { useState, useRef, useEffect } from 'react';
import './../styles/main.css';
import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';
import QrCodeSection from './QrCodeSection';
import projectImage from './../images/image1.jpg';  // Замените на ваш путь

import galleryImage1 from './../images/image1.jpg';  // Галерея изображений
import galleryImage2 from './../images/image2.jpg';
import galleryImage3 from './../images/image1.jpg';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const galleryImages = [galleryImage1, galleryImage2, galleryImage3];

    // Для свайпа
    const startXRef = useRef(0);
    const intervalRef = useRef(null);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => 
            prevImage === 0 ? galleryImages.length - 1 : prevImage - 1
        );
    };

    const handleTouchStart = (e) => {
        startXRef.current = e.touches[0].clientX;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const distance = startXRef.current - endX;

        if (distance > 50) {
            nextImage();
        } else if (distance < -50) {
            prevImage();
        }
        startAutoScroll();
    };

    const startAutoScroll = () => {
        intervalRef.current = setInterval(nextImage, 25000); 
    };

    useEffect(() => {
        startAutoScroll();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Header />
            <div className="home-block">
                {/* Секция с описанием проекта */}
                <div className="project-section">
                    <img src={projectImage} alt="Описание проекта" className="project-image" />
                    <div className="project-description">
                        <h2>О проекте</h2>
                        <p>Наш проект «Вёсла-ремёсла» — это межкампусный проект НИУ ВШЭ, который стремится изучить и сохранить уникальные традиции ремёсел и культуры в разных уголках России.</p>
                    </div>
                </div>

                {/* Галерея изображений */}
                <div className="gallery-section">
                    <div
                        className="gallery-container"
                        onTouchStart={handleTouchStart}  // Начало касания
                        onTouchEnd={handleTouchEnd}  // Конец касания
                    >
                        <div className="gallery-slider" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            {galleryImages.map((image, index) => (
                                <img key={index} src={image} alt={`Изображение ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                    <div className="gallery-buttons">
                        <button className="gallery-button" onClick={prevImage}>‹</button>
                        <button className="gallery-button" onClick={nextImage}>›</button>
                    </div>
                </div>

                <QrCodeSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;


