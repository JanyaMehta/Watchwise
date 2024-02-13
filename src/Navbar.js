import logoImage from './logo.png';
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
   navigate('/signup');
  };
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="logo">WatchWise</span>
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="button-group">
          <button onClick={handleSignUpClick} className="signup-btn">Sign Up</button>
          <button onClick={handleLoginClick} className="login-btn" >Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
