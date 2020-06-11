import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';
import UserSignupForm from './UserSignupForm';




function UserSignup() {
    return (
      <div>
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#27496D" }}
        >
          <img src={logo} alt="Logo" />
          <Link to="/userlogin" style={{ color: "white", fontSize: "25px" }}>
            Log in
          </Link>
        </nav>

           <UserSignupForm /> 
      </div>
    );
}

export default UserSignup;
