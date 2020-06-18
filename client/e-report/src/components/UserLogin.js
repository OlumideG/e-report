import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';


function UserLogin() {
 
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
        <img src={logo} alt="Logo" />
        <Link to="/usersignup" style={{ color: "white", fontSize: "25px" }}>Sign up</Link>
        <Link to="/adminlogin" style={{ color: "white", fontSize: "25px" }}>Admin Login</Link>
      </nav>



      <div className="formContainer">
        <form  className="formCard">

          <div className="titleContainer">
            <h1>Log in to E-report</h1>
          </div>

          <div className="emailContainer">
            <input type={'email'} name='email'  placeholder='Enter email' />
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
          <div className="formFooter">
            <div><Link to="/" className="cantLogin">Can't Log in?</Link></div>
            <div className="dot"> </div>
            <div><Link to="/" className="canSignup">Sign up</Link></div>
          </div>
        </form>
      </div>




      <div className="footerContainer">
        <div>
          <Link to="/"> <h4>About</h4> </Link>
        </div>
        <div>
          <Link to="/"><h4>Help</h4> </Link>
        </div>
        <div>
          <Link to="/"> <h4>Developers</h4> </Link>
        </div>
        <div>
          <Link to="/"><h4>Privacy Policy</h4></Link>
        </div>
        <div>
          <Link to="/"><h4>Terms of Service</h4></Link>
        </div>
      </div>

    </div>
  );
}

export default UserLogin;
