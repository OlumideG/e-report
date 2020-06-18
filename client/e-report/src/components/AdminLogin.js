
import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';






function AdminLogin() {
  
  
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
        <img src={logo} alt="Logo" />
        <Link to="/usersignup" style={{ color: "white", fontSize: "25px" }}>Create a Reports account with us </Link>
        <Link to="/userlogin" style={{ color: "white", fontSize: "25px" }}>User Login</Link>
      </nav>



      <div className="formContainer">
        <form  className="formCard">

          <div className="titleContainer">
            <h1>Admin Access only<i className="fa fa-lock fa-2x space-icon" aria-hidden="true"></i></h1>
          </div>

          <div className="emailContainer">
            <input type={'email'} name='email'   placeholder='Enter email' />
          </div>

          <div className="passwordContainer">
            <input
              type="password"
              name="password"
              placeholder={"Enter password"}
              
            />

          </div>
          <div className="submitContainer">
            <button className="btn-1"> Log In </button>
            <div className="breaklineContainer">
              <div className="breakline"></div>
            </div>
          </div>
       
        </form>
      </div>



    </div>
  );
}

export default AdminLogin;
