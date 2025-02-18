import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom'; // useNavigate hook for redirection

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validated, setValidated] = useState(false); // To handle form validation state

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Client-side form validation
    if (form.checkValidity() === false) {
      setValidated(true); // Set validated to true to show error messages
      return;
    }



      await  axios.get('http://localhost:8080/readUser')
    .then(res => {
        const user = res.data.find((user) => user.name === username && user.password === password);
                   

                    if (user) {
                      navigate('/dash');
                        
                      }
                      else {
                        // Set error message for invalid credentials
                        setErrorMessage('Invalid username or password');
                      }

   

     
    })




    // Dummy credentials for login validation
    // const validUsername = 'admin';
    // const validPassword = '123';

    // // Check if username and password are correct
    // if (username === validUsername && password === validPassword) {
    //   // Redirect to dashboard if credentials are correct
    //   navigate('/dash');
    // } 
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-50">
        <h2 className="mb-4 text-center">Login</h2>

        {/* Form with Bootstrap classes */}
        <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className={`form-control ${validated && !username ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide a username.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className={`form-control ${validated && !password ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>

          {/* Display error message if credentials are wrong */}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className='d-flex align-items-center justify-content-between'>
                    <p>Do you have any account ?</p>
                    <Link to={'/sign'} className=' '>Register</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
