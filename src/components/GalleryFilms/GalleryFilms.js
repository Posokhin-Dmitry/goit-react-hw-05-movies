import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const GalleryFilms = ({ dataFilms }) => {
  const location = useLocation();

  return (
    <ul className="gallery-cards">
      {dataFilms.map(
        ({ id, original_title, poster_path, vote_average, release_date }) => (
          <li key={id} className="card-item">
            <Link to={{ pathname: `movies/${id}`, state: { from: location } }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : 'https://ya1.fastfilm.net/images/poster_none.png'
                }
                alt={original_title}
                className="img-film"
              />
              <h1 className="card-title">{original_title}</h1>
              <div className="section-card-text">
                <p className="card-text">
                  Rating:
                  <span className="card-text-info"> {vote_average}</span>
                </p>
                <p className="card-text">
                  Date:<span className="card-text-info"> {release_date}</span>
                </p>
              </div>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

GalleryFilms.propTypes = {
  dataFilms: PropTypes.array.isRequired,
};

export default GalleryFilms;
