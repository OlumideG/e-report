import React from 'react';
import { Link } from 'react-router-dom';


function UserSignupExistAcc(){
 return(
  <div className="existingAccount">
     <p><span className="already">Already have an Account?</span> <Link><span className="alreadyLogin">Login</span></Link></p>
  </div>
 )
}

export default UserSignupExistAcc;
