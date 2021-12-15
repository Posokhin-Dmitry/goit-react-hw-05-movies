import { useState, useEffect } from 'react';
import * as api from '../servises/api';

const Reviews = ({ id }) => {
  const [dataReviews, setDataReviews] = useState([]);
  useEffect(() => {
    // if (!id) {
    //   return;
    // }
    api.getMovieReviews(id).then(({ data }) => {
      setDataReviews([...data.results]);
    });
  }, [dataReviews, id]);

  return (
    <>
      {dataReviews.length > 0 ? (
        <ul>
          {dataReviews.map(({ author, id, content }) => (
            <li key={id}>
              <h1>{author}</h1>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Sorry, there are no reviews on this film</h1>
      )}
    </>
  );
};

export default Reviews;
