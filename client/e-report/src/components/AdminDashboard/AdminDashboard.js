import React, { useState, useEffect } from 'react';
import logo from '../../../src/Logo.svg';
import { toast } from "react-toastify";
import {  useHistory } from 'react-router-dom';
import Chart from '../Chart/Chart';

import '../../App.css'




const Cards = ({ info, index, deleteReport,forwardReport }) => {
     return(
      <div className="todo">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address} </h5>
          <p className="card-text"> Report Id: {info.id} </p>
          <p className="card-text"> User Id: {info.user_id} </p>
          <p className="card-text">Report status: {info.status} </p>
          <p className="card-text"> Private Report: {info.privatereport.toString()} </p>
          <p className="card-text">Local Government: {info.localgovernment} </p>
          <p className="card-text"> {info.details} </p>
          <img className="card-img-top" src={info.imageurl} alt="report" style={{ width: "200px", height: "150px" }} />
          <div className="edit-delete">
          <button onClick={() => forwardReport(index, info)}> <i className="fa fa-mail-forward fa-2x"></i></button>
            <button onClick={() => deleteReport(index, info)}> <i className="fa fa-trash fa-2x"></i></button>
          </div>
  
        </div>
      </div>
    </div>

     )

}


 

 




function AdminDashboard({ setAdminAuth, index, info}) {

  const [reports, setReports] = useState([{
    category: "",
    address: "",
    details: "",
    imageurl: "",
    status:"",
    privatereport:false,
    localgovernment:"",
    user_id:""
  }

  ]);

  
  let history = useHistory();
  function landingPage() {
    history.push("/");
    };


  // const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      })
      
      const parseData = await res.json();
      console.log(parseData)
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAdminAuth(false);
      window.location.reload();
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();

    // const { admin } =  decode(localStorage.token);
    // console.log(localStorage.token,"Local Storage Token");
    // console.log(admin, "The Admin user")

    fetch(`http://localhost:3000/dashboard/admin/home`)
        .then(res => res.json())
        .then(result => { setReports(result)
          
          console.log(result)
        })
        .catch(err => {
          console.log(err.message);
  
        })

 }, []);







  const deleteReport = (x, info) => {
    console.log("deleted");
    const reportNumber = `${info.id}`
    console.log(x)
    console.log(reportNumber)
  fetch(`http://localhost:3000/dashboard/home/${reportNumber}`, {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'DELETE',
  mode: 'cors',
})
  window.location.reload();
  toast.success(`Report ${reportNumber} Deleted`)

  }

  const forwardReport =(x, info) =>{
    const reportNumber = `${info.id}`
    console.log(x)
    console.log(reportNumber)
  fetch(`http://localhost:3000/dashboard/forwarded/${reportNumber}`, {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'PATCH',
  mode: 'cors',
})
window.location.reload();
toast.success(`Report ${reportNumber} Forwaded`)
 }


  return (
    <div className="user-dashboard">
      <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
        <img src={logo} alt="Logo"  onClick={landingPage}/>
        <div style={{ display: "flex" }}>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
          <i className="fa fa-user fa-3x" style={{ marginLeft: "10px" }}></i>
          {/* <h2>Welcome {name}</h2> */}
         <button onClick={e => logout(e)} className="btn btn-danger">
            Logout
          </button>
        </div>
      </nav>
      {/* SideBar */}





   <div className="todo-list-admin">
   { reports === 0 ? 
     <div>Nothing Here</div> :
   reports.map((info, index) => (
        <Cards
          key={index}
          index={index}
          info={info}
          deleteReport={deleteReport}
          forwardReport ={forwardReport}
        />
      ))}

   </div>
      
      <div className="chartContainer">
        <div className="chart">
        <Chart />
        </div>
      </div>
     




    </div>
  );
}

export default AdminDashboard;
