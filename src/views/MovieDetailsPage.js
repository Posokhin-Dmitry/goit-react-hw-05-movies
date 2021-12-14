import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../servises/api';
import Container from '../components/Container/Container';

const MovieDetailsPage = () => {
  const [dataFilm, setDataFilm] = useState([]);
  const { filmId } = useParams();
  const {
    poster_path,
    original_title,
    overview,
    release_date = '',
    genres = [],
  } = dataFilm;

  useEffect(() => {
    api.getMovieDetails(filmId).then(({ data }) => {
      setDataFilm(data);
    });
  }, [dataFilm]);

  return (
    <Container>
      <div className="film-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <div className="film-text-section">
          <h1 className="film-card-title">{original_title}</h1>
          <p className="film-date">{release_date.slice(0, 4)}</p>
          <p className="film-card-genres">
            {genres.map(({ name }) => name).join(', ')}
          </p>
          <p className="film-card-overview">{overview}</p>
        </div>
      </div>
    </Container>
  );
};

export default MovieDetailsPage;
