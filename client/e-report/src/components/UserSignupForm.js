import React from 'react';
import { Link } from 'react-router-dom';

function UserSignupForm(){
  return (
    <div className="formContainerSignup">
      <form action="" method="post" className="formCardSignup">
        <div className="titleContainerSignup">
          <h1>Sign up for your Account</h1>
        </div>
        <div className="emailContainerSignup">
          <input type={'email'} name={'email'} placeholder={'Enter email'} />
        </div>
        <div className="firstNameContainer">
          <input type={"text"} name={"first-name"} placeholder={"Enter First Name"} />
        </div>
        <div className="lastNameContainer">
          <input
            type={"text"}
            name={"second-name"}
            placeholder={"Enter Last Name"}
          />
        </div>
        <div className="passwordContainerSignup">
          <input
            type={"password"}
            name={"password"}
            placeholder={"Enter password"}
          />

        </div>
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
    to our <Link><strong>Terms and Conditions</strong></Link> as well as <Link><strong>Privacy Policy</strong></Link>
          </p>
        </div>
        <div className="submitContainer">
          <button className="btn-1"> I Agree </button>
          <div className="breaklineContainer">
            <div className="breaklineSignup"></div>
          </div>
        </div>
        <div className="existingAccount">
          <p><span className="already">Already have an Account?</span> <Link><span className="alreadyLogin">Login</span></Link></p>
        </div>
      </form>

      <div className="footerContainerSignup">
        <div>
          <Link>
            {" "}
            <h4>About</h4>{" "}
          </Link>
        </div>
        <div>
          <Link>
            <h4>Help</h4>{" "}
          </Link>
        </div>
        <div>
          <Link>
            {" "}
            <h4>Developers</h4>{" "}
          </Link>
        </div>
        <div>
          <Link>
            <h4>Privacy Policy</h4>
          </Link>
        </div>
        <div>
          <Link>
            <h4>Terms of Service</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserSignupForm;