import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchURL, isLargeRow = false }) {
  const [films, setFilms] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setFilms(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  console.log(films);

  return (
    <div className='row'>
      <h2 className='heading-secondary'>{title}</h2>
      <div className='row__posters'>
        {films.map(
          (film) =>
            ((isLargeRow && film.poster_path) ||
              (!isLargeRow && film.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={film.id}
                src={`${base_url}${
                  isLargeRow ? film.poster_path : film.backdrop_path
                }`}
                alt={film.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
