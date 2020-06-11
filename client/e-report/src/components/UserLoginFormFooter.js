import React from 'react';
import { Link } from 'react-router-dom';

function UserLoginFormFooter(){
 return(
  <div className="formFooter">
      <div><Link to="" className="cantLogin">Can't Log in?</Link></div>
      <div className="dot"> </div>
      <div><Link to="" className="canSignup">Sign up</Link></div>
  </div>
 )
}

export default UserLoginFormFooter;

