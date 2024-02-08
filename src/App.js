import MovieList from "./MovieList";
import Navbar from "./Navbar";
import './index.css';
import { BrowserRouter} from "react-router-dom";
// import Home from "/";
// import SignUp from "/";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <MovieList />
    </div>
    </BrowserRouter>
  );
}

export default App;
