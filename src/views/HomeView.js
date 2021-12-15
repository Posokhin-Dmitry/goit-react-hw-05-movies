import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../servises/api';
import Container from '../components/Container/Container';
import GalleryFilms from '../components/GalleryFilms/GalleryFilms';

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
      <GalleryFilms dataFilms={TrendingData} />
    </Container>
  );
}

export default HomeView;
