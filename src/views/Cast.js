import { useState, useEffect } from 'react';
import * as api from '../servises/api';

const Cast = ({ id }) => {
  const [dataCast, setDataCast] = useState([]);
  useEffect(() => {
    api.getMovieCredits(id).then(({ data }) => {
      setDataCast([...data.cast]);
    });
  }, [dataCast, id]);

  return (
    <ul className="cast-list">
      {dataCast.map(({ id, name, profile_path, character }) => (
        <li key={id} className="cast-item">
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                : 'https://ya1.fastfilm.net/images/poster_none.png'
            }
            alt={name}
          />
          <h1>{name}</h1>
          <h3>{`as ${character}`}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
