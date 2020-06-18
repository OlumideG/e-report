import React from 'react';
import './App.css';
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
// import Result from "./components/result";
import { Switch, Route} from 'react-router-dom';




function App() {


  

  return (
    <div>
      
        <Switch>
      
          {/* <Route path="/result" component = {Result} /> */}
          <Route exact path="/" component ={UserSignup} />
          <Route path="/userlogin" component = {UserLogin} />
          <Route path="/adminlogin" component = {AdminLogin} />
          <Route path="/userdashboard" component = {UserDashboard} />
          <Route path="/admindashboard" component = {AdminDashboard} />
       </Switch>







    </div>
  );
}

export default App;
