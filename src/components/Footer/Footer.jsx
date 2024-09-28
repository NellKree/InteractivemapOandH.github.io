import React from 'react';
import './Footer.css';
import icon1 from './../../images/footerimage/fi1.jpg';  
import icon2 from './../../images/footerimage/fi2.jpg';
import icon3 from './../../images/footerimage/fi3.jpg';
import icon4 from './../../images/footerimage/fi4.jpg';
import icon5 from './../../images/footerimage/fi5.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://vk.com/club226707477" target="_blank" rel="noopener noreferrer">
          <img src={icon1} alt="Site 1" />
        </a>
        <a href="https://vk.com/sos2_hse" target="_blank" rel="noopener noreferrer">
          <img src={icon2} alt="Site 2" />
        </a>
        <a href="https://vk.com/tkhse_perm" target="_blank" rel="noopener noreferrer">
          <img src={icon3} alt="Site 3" />
        </a>
        <a href="https://vk.com/hse_perm_studactive" target="_blank" rel="noopener noreferrer">
          <img src={icon4} alt="Site 4" />
        </a>
        <a href="https://perm.hse.ru/" target="_blank" rel="noopener noreferrer">
          <img src={icon5} alt="Site 5" />
        </a>
      </div>
      <div className="footer__info">
        <p className="footer__email">oneevgexaone@gmail.com</p>
        <p className="footer__copyright">© 2024 Вёсла-ремёсла</p>
      </div>
    </footer>
  );
};

export default Footer;
