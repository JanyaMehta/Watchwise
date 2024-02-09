import Home from "./Home";
import Navbar from "./Navbar";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from "./MovieDetails";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
