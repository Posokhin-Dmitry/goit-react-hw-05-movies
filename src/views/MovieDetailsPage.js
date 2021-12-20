import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../servises/api';
import Container from '../components/Container/Container';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = () => {
  const [dataFilm, setDataFilm] = useState({});
  const { filmId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const {
    id,
    poster_path,
    original_title,
    overview,
    release_date = '',
    genres = [],
  } = dataFilm;
  console.log(location);
  useEffect(() => {
    api.getMovieDetails(filmId).then(({ data }) => {
      setDataFilm(data);
    });
  }, [dataFilm]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <Container>
      <button type="button" className="button" onClick={onGoBack}>
        Back
      </button>

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
            <Link
              to={{
                pathname: `${url}/cast`,
                state: { from: location.state.from },
              }}
            >
              <button className="button" type="button">
                Cast
              </button>
            </Link>
            <Link
              to={{
                pathname: `${url}/review`,
                state: { from: location.state.from },
              }}
            >
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
