import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function LoginPage() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    userpwd: '',
    email: '',
    usrphno: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      
      const response = axios.post('/signincom/usrsignin', formData);
      console.log(response.data);
      navigate('/userintf');

      // Add any further actions you want to perform after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="userpwd"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="usrphno"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
          />
        </div>
        
        <button type="submit" className="submit-button">Login</button>
      </form>
      <Link to = "/userintf">User interface </Link>
    </div>
  );
}

export default LoginPage;
