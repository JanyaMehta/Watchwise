import Home from "./Home";
import Navbar from "./Navbar";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from "./MovieDetails";
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar  />
    
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
