import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';


function UserSignup() {
    return (
        <div style={{fontFamily:"Open Sans", fontStyle: "normal",fontWeight: "normal"}}>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo" />
                <Link to="/userlogin" style={{ color:"white", fontSize:"25px" }}>Log in</Link>
            </nav>



        </div>
    );
}

export default UserSignup;
