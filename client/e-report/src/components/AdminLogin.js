import React, { useState } from 'react';
import logo from '../../src/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";




function AdminLogin({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:3000/auth/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
        <img src={logo} alt="Logo" />
        <Link to="/usersignup" style={{ color: "white", fontSize: "25px" }}>Create a Reports account with us </Link>
        <Link to="/userlogin" style={{ color: "white", fontSize: "25px" }}>User Login</Link>
      </nav>



      <div className="formContainer">
        <form onSubmit={onSubmitForm} className="formCard">

          <div className="titleContainer">
            <h1>Admin Access only<i className="fa fa-lock fa-2x space-icon" aria-hidden="true"></i></h1>
          </div>

          <div className="emailContainer">
            <input type={'email'} name='email'  value={email} placeholder='Enter email' onChange={e => onChange(e)}/>
          </div>

          <div className="passwordContainer">
            <input
              type="password"
              name="password"
              placeholder={"Enter password"}
              onChange={e => onChange(e)}
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
