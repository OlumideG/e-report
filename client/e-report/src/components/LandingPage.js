import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/Logo.svg';
import Particles from 'react-particles-js';
import  {particlesOptions} from "./particles";


const LandingPage = () => {
    return (
        <div>
           {/* <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}> */}
           <nav className="navbar navbar-light" style={{ backgroundColor: "#122233", position: "fixed" }}>
                <img src={logo} alt="Logo" />
                <Link to="/userlogin" style={{ color:"white", fontSize:"25px" }}>Log in</Link>
                <Link to="/adminlogin" style={{ color: "white", fontSize: "25px" }}>Admin Login</Link>
            </nav>

           <article className="athelas">
  {/* <div className="vh-100 dt w-100 tc bg-dark-gray white cover" > */}
  <div className="vh-100 dt w-100 tc white cover" >
    <div className="dtc v-mid">
      <header className="white-70">
        <h2 className="f6 fw1 ttu tracked mb2 lh-title">STUTERN</h2>
        <h3 className="f6 fw1 lh-title">SGA SWE0.7</h3>
      </header>
      <h1 className="f1 f-headline-l fw1 i white-60">E-REPORT</h1>
      <blockquote className="ph0 mh0 measure f4 lh-copy center">
        <p className="fw1 white-70">
         Lives are saved when time is not wasted
        </p>
        <cite className="f6 ttu tracked fs-normal">Group 7</cite>
      </blockquote>
    </div>
  </div>
    </article>


    <Particles className='particles'
              params={particlesOptions}
            />
        </div>
    )



}
export default LandingPage;


