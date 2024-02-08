import React, { useState, useEffect } from 'react';


const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try { 
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();
      // console.log(data);
      setMovies(data.results); // Assign the 'array' array to 'movies'
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const truncateOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) return overview;
    return overview.substring(0, maxLength) + '...';
  };


  return (  
    <div className="movie-list">
      {movies && movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
          {/*    overview remains generalized for every card */}
             <p className="movie-overview">{truncateOverview(movie.overview, 50)}</p>
            <p className="movie-year">{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default MovieList;
