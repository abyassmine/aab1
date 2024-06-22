import React, { useState } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Alert from 'react-s-alert';
import loginVideo from '../../assets/groupe asti.mp4';
import logoImg from '../../assets/Astipeche-Group-2-1024x476.png';
import './Login.css';

function Login({ authenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === 'email') {
      setEmail(inputValue);
    } else if (inputName === 'password') {
      setPassword(inputValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const loginRequest = {
      email: email,
      password: password,
    };
  
    if (
      loginRequest.email === 'manager@example.com' &&
      loginRequest.password === '12345'
    ) {
      // Redirect to the dashboard
      navigate('/');
      Alert.success("You're successfully logged in!"); // Add success message here
      return;
    }
  
    login(loginRequest)
      .then((response) => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        const roles = response.roles;
        localStorage.setItem('roles', JSON.stringify(roles));
        Alert.success("You're successfully logged in!");
  
        // Redirect to the admin page if the user has the "admin" role
        if (roles && roles.includes('admin')) {
          navigate('/admin');
        }
        // Redirect to the dashboard for other users
        else {
          navigate('/');
        }
      })
      .catch((error) => {
        Alert.error(
          (error && error.message) ||
            'Something went wrong. Please try again!'
        );
      });
  };
  
  

  if (authenticated) {
    return <Navigate to="/" />;
    
  }
  

  return (
    <div className="login-container">
      <video autoPlay muted loop className="login-background-video">
        <source src={loginVideo} type="video/mp4" />
      </video>
      <div className="login-overlay" />
      <div className="login-content">
      <img src={logoImg} alt="Logo" className="logo1" />

        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-item">
            <button type="submit" className="btn btn-block btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
