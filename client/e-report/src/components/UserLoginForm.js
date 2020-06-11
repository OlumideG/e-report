import React from 'react';
import UserLoginTitle from './UserLoginTitle';
import UserLoginEmailInput from './UserLoginEmailInput';
import UserLoginPasswordInput from './UserLoginPasswordInput';
import UserLoginSubmit from './UserLoginSubmit';
import UserLoginFormFooter from './UserLoginFormFooter';


function UserLoginForm (){
 return (
   <div className="formContainer">
     <form action="" method="post" className="formCard">
       <UserLoginTitle />
       <UserLoginEmailInput />
       <UserLoginPasswordInput />
       <UserLoginSubmit />
       <UserLoginFormFooter />
     </form>
   </div>
 );
}


export default UserLoginForm;