
import React from 'react';
import './portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__subtitle'> Портфолио </h3>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Evelina-melnikova/how-to-learn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__text'> Статичный сайт </p>
            <span className='portfolio__arrow'> ↗ </span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Evelina-melnikova/russian-travel'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__text'> Адаптивный сайт </p>
            <span className='portfolio__arrow'> ↗ </span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Evelina-melnikova/react-mesto-auth'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__text'> Одностраничное приложение </p>
            <span className='portfolio__arrow'> ↗ </span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Evelina-melnikova/IT-Alliance'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__text'> Собственный проект </p>
            <span className='portfolio__arrow'> ↗ </span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;