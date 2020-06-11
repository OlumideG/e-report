import React from 'react';
import { Link } from 'react-router-dom';

function UserSignTerms(){
 return(
   <div className="termsContainer">
    <p>
    By signing up, your comfirm you've read and agreed <br/>
    to our <Link><strong>Terms and Conditions</strong></Link> as well as <Link><strong>Privacy Policy</strong></Link>
    </p>
   </div>
 )
}

export default UserSignTerms;