import React from 'react';
import './App.css';
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin";
import UserDashboard from "./components/UserDashboard";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component ={UserSignup} />
          <Route path="/userlogin" component = {UserLogin} />
          <Route path="/userdashboard" component = {UserDashboard} />
         </Switch>
    </div>
  );
}

export default App;
