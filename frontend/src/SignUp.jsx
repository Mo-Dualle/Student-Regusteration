// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // useNavigate hook for redirection
// import axios from 'axios'; // Make sure to install axios

// const SignUp = () => {
//   const [id, setId] = useState(''); // New state for ID
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [validated, setValidated] = useState(false); // To handle form validation state

//   const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     // Client-side form validation
//     if (form.checkValidity() === false) {
//       setValidated(true); // Set validated to true to show error messages
//       return;
//     }

//     // Check if password and confirm password match
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     // Prepare the data to send to the backend
//     const userData = {
//       id,
//       username,
//       email,
//       password,
//     };

//     try {
//       // Send POST request to the backend API to store user data in the database
//       const response = await axios.post('http://localhost:8080/createUser', userData);

//       // If the user was successfully created
//       if (response.status === 200) {
//         console.log('User signed up:', response.data);
//         // Redirect to login page after successful signup
//         navigate('/');
//       }
//     } catch (err) {
//       // Handle error (e.g., if the server is down, or there is an issue with the data)
//       console.error('Error signing up:', err);
//       setErrorMessage('An error occurred during signup. Please try again.');
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <div className="w-50">
//         <h2 className="mb-4 text-center">Sign Up</h2>

//         {/* Form with Bootstrap classes */}
//         <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="id" className="form-label">ID</label>
//             <input
//               type="text"
//               id="id"
//               className={`form-control ${validated && !id ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
//               placeholder="Enter ID"
//               value={id}
//               onChange={(e) => setId(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback">Please provide an ID.</div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input
//               type="text"
//               id="username"
//               className={`form-control ${validated && !username ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback">Please provide a username.</div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               className={`form-control ${validated && !email ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback">Please provide an email.</div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="password"
//               className={`form-control ${validated && !password ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback">Please provide a password.</div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className={`form-control ${validated && !confirmPassword ? 'is-invalid' : ''}`} // Apply is-invalid if validated and empty
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <div className="invalid-feedback">Please confirm your password.</div>
//           </div>

//           {/* Display error message if passwords do not match */}
//           {errorMessage && (
//             <div className="alert alert-danger" role="alert">
//               {errorMessage}
//             </div>
//           )}

//           <button type="submit" className="btn btn-primary w-100">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;










import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();

  const [error, setError] = useState('');

 const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    })

    

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!values.id || !values.name || !values.email || !values.password) {
      setError('All fields are required');
      return;
    }

    // Simulate successful form submission
    setError('');
    setValues({
        id: '',
        name: '',
        email: '',
        password: ''
    })

    axios.post('http://localhost:8080/createUser', values)
       .then(res => {
        console.log(res.data);
        //  window.location.reload();
            navigate('/');
       })
       .catch(err => console.log(err))
   
    

    
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>

      {error && <div className="alert alert-danger">{error}</div>}
    

      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter your name"
            onChange={e=> setValues({...values, id: e.target.value})}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={e=> setValues({...values, name: e.target.value})}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={e=> setValues({...values, email: e.target.value})}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={e=> setValues({...values, password: e.target.value})}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
     
    </div>
  );
};

export default SignUp;

