import { Link} from "react-router-dom";

const MovieList = ({movies}) => {
  // Destructure the 'results' array from the data prop
   const { results } = movies;

const truncateOverview = (overview, maxLength) => {
    if (overview.length <= maxLength) return overview;
    return overview.substring(0, maxLength) + '...';
  };
  return (  
    <div className="movie-list">
      { results.map(movie => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt=" "/>
          <div className="movie-preview">
            <h2 className="movie-title">{movie.title}</h2>
          {/*    overview remains generalized for every card */}
             <p className="movie-overview">{truncateOverview(movie.overview, 50)}</p>
            <p className="movie-year">{movie.release_date}</p>
          </div>
          </Link>
        </div>
      ))}

    </div>
  );
}
 
export default MovieList;
