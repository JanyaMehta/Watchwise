import MovieList from './MovieList';
import useFetch from './useFetch';

const Home = () => {
   
const{ data, isPending, error }=useFetch(process.env.REACT_APP_TRENDING_API_URL);

console.log({data});
 return (
  <div className="home">
   { error && <div> { error }</div>}
   {isPending && <div> Loading</div>}
   { data && <MovieList movies={data} /> } 
   {/* movies is props name it conatins data(movies)  */}
</div>

);
}
export default Home;