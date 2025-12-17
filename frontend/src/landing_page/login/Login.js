import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Auth.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        window.location.href = "http://localhost:3001";
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Left Side */}
        <div className="auth-left">
          <h2>Hello Again!</h2>
          <p>
            Welcome back to your dashboard. Login to check your holdings,
            positions, and execute new trades.
          </p>
        </div>

        {/* Right Side */}
        <div className="auth-right">
          <h2>Login</h2>
          <p className="sub-text">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="auth-btn">
              Login
            </button>

            <div className="auth-footer">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
