import React from 'react';

function UserLoginPasswordInput(){
  return (
    <div className="passwordContainer">
      <input
        type={"password"}
        name={"password"}
        placeholder={"Enter password"}
      />

    </div>
  );
}


export default UserLoginPasswordInput;