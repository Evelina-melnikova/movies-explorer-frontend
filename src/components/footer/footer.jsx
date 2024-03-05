import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'> Учебный проект Яндекс.Практикум х&nbsp;BeatFilm. </h2>
      <div className='footer__wrapper'>
        <span className='footer__copyright'> &copy;&nbsp;2024 </span>
        <ul className='footer__list'>
          <li className='footer__list-links'>
            <a
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__link'
            > Яндекс.Практикум </a>
          </li>
          <li className='footer__list-links'>
            <a
              href='https://github.com/Evelina-melnikova'
              target='_blank'
              rel='noopener noreferrer'
              className='footer__link'
            > Github </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;