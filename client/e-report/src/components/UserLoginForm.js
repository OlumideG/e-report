import React from 'react';
import { Link } from 'react-router-dom';


function UserLoginForm (){
 return (
   <div className="formContainer">
     <form action="" method="post" className="formCard">

       <div className="titleContainer">
         <h1>Log in to E-report</h1>
       </div>

       <div className="emailContainer">
         <input type={'email'} name={'email'} placeholder={'Enter email'} />
       </div>
       
       <div className="passwordContainer">
         <input
           type={"password"}
           name={"password"}
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
         <div><Link to="" className="cantLogin">Can't Log in?</Link></div>
         <div className="dot"> </div>
         <div><Link to="" className="canSignup">Sign up</Link></div>
       </div>
     </form>
   </div>
 );
}


export default UserLoginForm;