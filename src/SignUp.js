import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Assuming you've set up Firebase authentication
import logo from './logo.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom for redirection

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // If successful, redirect user to the dashboard page
      navigate('/dashboard'); 
    } catch (error) {
      // Handle signup errors
      if (error.code === 'auth/email-already-in-use') {
        // If the email is already in use
        setError('The email is already being used.');
      } else if (error.code === 'auth/invalid-email') {
        // If the email is not valid
        setError('The email is not valid.');
      } else {
        // Handle other errors
        setError(error.message);
      }
    }
  };

  return (
    <div className="login-form">
      <img src={logo} alt="Logo" className="logo-login" />
      <h2>Sign Up</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
