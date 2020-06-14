import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';
import UserLoginForm from './UserLoginForm';

function UserLogin() {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#27496D" }}
      >
        <img src={logo} alt="Logo" />
        <Link to="/" style={{ color: "white", fontSize: "25px" }}>
          Sign up
        </Link>
      </nav>

      <UserLoginForm />
      
      <div className="footerContainer">
        <div>
          <Link> <h4>About</h4> </Link>
        </div>
        <div>
          <Link><h4>Help</h4> </Link>
        </div>
        <div>
          <Link> <h4>Developers</h4> </Link>
        </div>
        <div>
          <Link><h4>Privacy Policy</h4></Link>
        </div>
        <div>
          <Link><h4>Terms of Service</h4></Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
