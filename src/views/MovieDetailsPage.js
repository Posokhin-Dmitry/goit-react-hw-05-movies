import { useParams, Link, useRouteMatch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../servises/api';
import Container from '../components/Container/Container';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = () => {
  const [dataFilm, setDataFilm] = useState({});
  const { filmId } = useParams();
  const { url } = useRouteMatch();
  const {
    id,
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
        <div className="flex">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://ya1.fastfilm.net/images/poster_none.png'
            }
            alt={original_title}
          />
          <div className="film-text-section">
            <h1 className="film-card-title">{original_title}</h1>
            <p className="film-date">{release_date.slice(0, 4)}</p>
            <p className="film-card-genres">
              {genres.map(({ name }) => name).join(', ')}
            </p>
            <p className="film-card-overview">{overview}</p>
            <Link to={`${url}/cast`}>
              <button className="button" type="button">
                Cast
              </button>
            </Link>

            <Link to={`${url}/review`}>
              <button className="button" type="button">
                Review
              </button>
            </Link>
          </div>
        </div>
        <Route path={`${url}/cast`}>
          <Cast id={id} />
        </Route>
        <Route path={`${url}/review`}>
          <Reviews id={id} />
        </Route>
      </div>
    </Container>
  );
};

export default MovieDetailsPage;
