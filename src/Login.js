import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import logo from './logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform authentication logic (e.g., Firebase authentication)
      const userCredential = await signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // If successful, redirect user to dashboard and display user information
      console.log('User logged in:', user);
      // Redirect to the dashboard page or do something else
      
    } catch (error) {
      // Handle authentication errors
      if (error.code === 'auth/user-not-found') {
        // If the user doesn't exist, display a message indicating that no account exists with that email
        setError('No account found with that email. Please sign up.');
      } else {
        // Handle other authentication errors
        setError(error.message);
      }
    }
  };

  return (
    <div className="login-form">
      <img src={logo} alt="Logo" className="logo-login" />
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {/* Use Link component for navigation to sign up page */}
       <p style={{ marginTop: '10px',color: 'white'}}>Don't have an account? <Link to="/signup" style={{ textDecoration: 'underline', color: 'white',}}>Sign Up</Link></p>
    </div>
  );
};

export default Login;
