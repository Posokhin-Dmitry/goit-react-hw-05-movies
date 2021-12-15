import React, { Switch, Route } from 'react-router-dom';
import './App.css';
// import * as api from './servises/api';
import Header from './components/Header/Header';
import HomeView from './views/HomeView';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviePage from './views/MoviesPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviePage />
        </Route>
        <Route path="/movies/:filmId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
