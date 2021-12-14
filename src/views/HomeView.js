import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as api from '../servises/api';
import Container from '../components/Container/Container';

function HomeView() {
  const [TrendingData, setTrendingData] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(({ data }) => {
      setTrendingData([...data.results]);
    });
  }, [TrendingData]);

  return (
    <Container>
      <h1 className="home-title">Trending Today</h1>
      <ul className="gallery-cards">
        {TrendingData.map(
          ({ id, original_title, poster_path, vote_average, release_date }) => (
            <li key={id} className="card-item">
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={original_title}
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
    </Container>
  );
}

export default HomeView;
