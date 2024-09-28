import React from 'react';
import { Link } from 'react-router-dom';
import qrCodeImage from './../images/qr.svg'; 

const QrCodeSection = () => {
  return (
    <div className="film-section">
      <a href="https://vk.com/club226707477" target="_blank" rel="noopener noreferrer" className="no-style-link">
        <img src={qrCodeImage} alt="QR-код для фильма" className="qr-code" />
      </a>

      <div className="film-description">
        <h2>Посмотрите наш фильм!</h2>
        <p>
          Наш фильм раскрывает удивительные истории ремёсел и мастеров, которые поддерживают традиции и передают их новым
          поколениям. Отсканируйте QR-код, чтобы посмотреть фильм!
        </p>
      </div>

      <Link to="/map" className="button home-button">
        Интерактивная карта
      </Link>
    </div>
  );
};

export default QrCodeSection;
