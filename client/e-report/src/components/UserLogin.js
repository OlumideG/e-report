import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';
import UserLoginForm from './UserLoginForm';
import UserLoginFooter from "./UserLoginFooter";

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
      <UserLoginFooter />
    </div>
  );
}

export default UserLogin;
