import React,{useState, useEffect} from 'react';
import './App.css';
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Result from "./components/result";
import { Switch, Route, Redirect} from 'react-router-dom';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {


  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };



  return (
    <div>
       <Route exact path="/" component = {Result} />
        {/* <Switch>
          <Route path="/result" component = {Result} />
          <Route exact path="/" component ={UserSignup} />
          <Route path="/userlogin" component = {UserLogin} />
          <Route path="/adminlogin" component = {AdminLogin} />
          <Route path="/userdashboard" component = {UserDashboard} />
          <Route path="/admindashboard" component = {AdminDashboard} />
       </Switch> */}



<Switch>
            <Route
              exact
              path="/userlogin"
              render={props =>
                !isAuthenticated ? (
                  <UserLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/userdashboard" />
                )
              }
            />

            <Route
              exact
              path="/adminlogin"
              render={props =>
                !isAuthenticated ? (
                  <AdminLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admindashboard" />
                )
              }
            />


            <Route
              exact
              path="/usersignup"
              render={props =>
                !isAuthenticated ? (
                  <UserSignup {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/userdashboard" />
                )
              }
            />
            <Route
              exact
              path="/userdashboard"
              render={props =>
                isAuthenticated ? (
                  <UserDashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/userlogin" />
                )
              }
            />

             <Route
              exact
              path="/admindashboard"
              render={props =>
                isAuthenticated ? (
                  <AdminDashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/adminlogin" />
                )
              }
            /> 
          </Switch>



    </div>
  );
}

export default App;
