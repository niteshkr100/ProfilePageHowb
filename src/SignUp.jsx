// src/LoginPage.js
import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './Login.css';
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const SignUp = () => {

   

  return (
    <div className="login-page">

      
    
      <div className="login-container">
     
        <div className="avatar"></div>
        <h2>Sign Up</h2>
        <Link to="/"><IoIosCloseCircle className='closelogin'/></Link>
        <div className="social-login">
          <button className="google"><FaGoogle /> Google</button>
          <button className="facebook"><FaFacebook /> Facebook</button>
        </div>
        <div className="divider">
          <span>Or</span>
        </div>
        <form className="login-form">
          <div className="input-field">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Jiangyu" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">By creating an account you agree to the <a href="#">terms of use</a> and our <a href="#">privacy policy</a>.</label>
          </div>
          <button className="create-account">Create account</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
