import React from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';



function UserSignup() {

 return (
        <div style={{fontFamily:"Open Sans", fontStyle: "normal",fontWeight: "normal"}}>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo" />
                <Link to="/userlogin" style={{ color:"white", fontSize:"25px" }}>Log in</Link>
                <Link to="/adminlogin" style={{ color: "white", fontSize: "25px" }}>Admin Login</Link>
            </nav>

            <div className="formContainerSignup">
      <form   className="formCardSignup">
        <div className="titleContainerSignup">
          <h1>Sign up for your Account</h1>
        </div>
        <div className="emailContainerSignup">
          <input type='text'
           name='email'
        
            placeholder='Enter email' 
            
             />
        </div>
        <div className="firstNameContainer">
          <input type="text" 
          name="firstname"
      
           placeholder={"Enter First Name"} 
           
            />
        </div>
        <div className="lastNameContainer">
          <input
            type="text"
            name="lastname"
            
            placeholder={"Enter Last Name"}
           
          />
        </div>
        <div className="passwordContainerSignup">
          <input
            type="password"
            name="password"
          
            placeholder={"Enter password"}
          
          />

        </div>
        <button className="btn-1"> Create Account </button>
        <div className="dashContainer">
          <div className="firstDash"></div>
          <div className="secondDash"></div>
          <div className="thirdDash"></div>
          <div className="fourthDash"></div>
          <div className="fifthDash"></div>
        </div>
        <div className="passwordInfoContainer">
          <p className="info">Password must have at least 8 Characters</p>
        </div>
        <div className="termsContainer">
          <p>
            By signing up, your comfirm you've read and agreed <br />
    to our <Link to="/"><strong>Terms and Conditions</strong></Link> as well as <Link to="/"><strong>Privacy Policy</strong></Link>
          </p>
        </div>
        <div className="submitContainer">
          {/* <button className="btn-1"> Create Account </button> */}
          <div className="breaklineContainer">
            <div className="breaklineSignup"></div>
          </div>
        </div>
        <div className="existingAccount">
          <p><span className="already">Already have an Account?</span> <Link to="/"><span className="alreadyLogin">Login</span></Link></p>
        </div>
      </form>

      <div className="footerContainerSignup">
        <div>
          <Link to="/">
            {" "}
            <h4>About</h4>{" "}
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Help</h4>{" "}
          </Link>
        </div>
        <div>
          <Link to="/">
            {" "}
            <h4>Developers</h4>{" "}
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Privacy Policy</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Terms of Service</h4>
          </Link>
        </div>
      </div>
    </div>

        </div>
    );
}

export default UserSignup;
