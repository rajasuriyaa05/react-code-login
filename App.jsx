import React, { useState } from "react";
import "./App.css";
import speechImage from "./speech.jpeg";
import eyeonImage from "/eyeon.webp";   // Eye open
import eyeoffImage from "/eyeoff.webp"; // Eye closed (you'll need this image too!)

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="login-wrapper">
      {/* Left side: login form */}
      <div className="login-container">
        <div className="logo">Your Logo</div>
        <h2>Log In</h2>
        <hr className="underline" />

        <form>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address..."
            required
          />

          <label>Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password..."
              required
            />
            <span className="toggle-visibility" onClick={togglePassword}>
              <img
                src={passwordVisible ? eyeoffImage : eyeonImage}
                alt="Toggle visibility"
                className="eye-icon"
              />
            </span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>

      {/* Right side: image */}
      <div className="speech-image">
        <img src={speechImage} alt="social media speech" />
      </div>
    </div>
  );
};

export default Login;
