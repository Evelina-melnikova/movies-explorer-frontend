import React from 'react';
import './movies-card-list.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList() {
  const location = useLocation();
  const isMovies = ['/movies'].includes(location.pathname);

  return (
    <section className='movies-card-list'>
        <MoviesCard></MoviesCard>
      {isMovies ? (
      <div className='movies-card-list__more'>
        <button type='button' className='movies-card-list__more-button'>Ещё</button>
      </div>
      ) : ''}
    </section>
  );
}

export default MoviesCardList