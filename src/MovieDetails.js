import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./index.css"; // Import custom CSS file

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <div className="movie-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div className="movie-card-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-details-content">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p className="release-date">Release Date: {movie.release_date}</p> {/* Add class for styling */}
            <div className="vote-average">Vote Average: {movie.vote_average}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
