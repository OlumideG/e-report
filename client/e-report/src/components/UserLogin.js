import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';

function UserLogin() {
  return (
    <div style={{fontFamily:"Open Sans"}}>
        <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo" />
                <Link to="/" style={{ color:"white", fontSize:"25px"}}>Sign up</Link>
            </nav>

           
    </div>
  );
}

export default UserLogin;
