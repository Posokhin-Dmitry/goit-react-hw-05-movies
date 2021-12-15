import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import Button from '../components/Button/Button';
import GalleryFilms from '../components/GalleryFilms/GalleryFilms';
import * as api from '../servises/api';

function MoviePage() {
  const [query, setQuery] = useState('');
  const [dataFilms, setDataFilms] = useState([]);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const queryFilm = new URLSearchParams(location.search).get('search') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    searchQuery(query, page);
  }, [query, page]);

  useEffect(() => {
    if (queryFilm === '') {
      return;
    }
    setQuery(queryFilm);
  }, [queryFilm]);

  const searchQuery = (query, page) => {
    api
      .getSearchMovie(query, page)
      .then(({ data }) => {
        setDataFilms([...dataFilms, ...data.results]);
      })
      .catch(error => console.log(error));
  };

  const handleFormSubmit = query => {
    setDataFilms([]);
    setPage(1);
    setQuery(query);
    history.push({ ...location, search: `search=${query}` });
  };

  const handleClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleFormSubmit} />
      <GalleryFilms dataFilms={dataFilms} />
      {dataFilms.length > 11 && <Button onClick={handleClickLoadMore} />}
    </Container>
  );
}

export default MoviePage;
