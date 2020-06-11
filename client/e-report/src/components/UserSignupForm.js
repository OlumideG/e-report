import React from 'react';
import UserSignupTitle from './UserSignupTitle';
import UserSignupEmailInuput from './UserSignupEmailInput';
import UserFirstName from './UserFirstName';
import UserLastName from './UserLastName';
import UserSignupPasswordInput from './UserSignupPasswordInput';
import UserSignupDash from './UserSignupDash';
import UserSignupPasswordInfo from './UserSignupPasswordInfo';
import UserSignupTerms from './UserSignupTerms';
import UserSignupButton from './UserSignupButton';
import  UserSignupExistAcc from './UserSignupExistAcc';
import UserSignupFooter from './UserSignupFooter';

function UserSignupForm(){
  return (
    <div className="formContainerSignup">
      <form action="" method="post" className="formCardSignup">
        <UserSignupTitle />
        <UserSignupEmailInuput />
        <UserFirstName />
        <UserLastName />
        <UserSignupPasswordInput />
        <UserSignupDash />
        <UserSignupPasswordInfo />
        <UserSignupTerms />
        <UserSignupButton />
        <UserSignupExistAcc />
      </form>

      <UserSignupFooter />
    </div>
  );
}

export default UserSignupForm;