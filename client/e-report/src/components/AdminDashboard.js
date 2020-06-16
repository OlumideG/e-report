import React, { useState, useEffect } from 'react';
import logo from '../../src/Logo.svg';
import { toast } from "react-toastify";



const Cards = ({ info, index, deleteReport }) => 
  <div className="todo">
    <div className="card" style={{ width: "18rem" }}>

      <div className="card-body">
        <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address} </h5>
        <p className="card-text"> {info.details} </p>
        {/* <p className="card-text"> {info.imageUrl} </p> */}
        <img className="card-img-top" src={info.imageUrl} alt="report" style={{ width: "200px", height: "150px" }} />
        <div className="edit-delete">
          <button ><i className="fa fa-pencil-square-o fa-2x"></i></button>
          <button onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-2x"></i></button>
        </div>

      </div>
    </div>
  </div>;



function AdminDashboard({ setAuth }) {


  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      })

     
     
     
     
     
      const parseData = await res.json();
      setName(parseData.firstname);
      setReports(parseData)
      // setReports({
      //   category: parseData.category,
      //   address:parseData.address,
      //   details: parseData.details,
      //   imageUrl: parseData.imageUrl})
      console.log(parseData)
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();

    fetch('http://localhost:3000/dashboard/home')
        .then(res => res.json())
        .then(result => result =>{
           setReports(result);
          console.log(result);
        })
        .catch(err => {
          console.log(err.message);
  
        })
  }, []);




  const [reports, setReports] = useState([{
    category: "",
    address: "",
    details: "",
    imageUrl: ""
  }

  ]);


  // useEffect(() => {
  //   fetch('http://localhost:3000/dashboard/home')
  //     .then(res => res.json())
  //     .then(result => {
  //       if (result.address.length === 0){
  //         console.log("No reports at the datbase")
  //       } 
        
       
  //     }).then(result =>{
  //        setReports(result);
  //       console.log(result);
  //     })
  //     .catch(err => {
  //       console.log(err.message);

  //     })
  // }, []);

  const deleteReport = () => {
    console.log("deleted");
  }


  return (
    <div>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
        <img src={logo} alt="Logo" />
        <div style={{ display: "flex" }}>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
          </form>
          <i className="fa fa-user fa-3x" style={{ marginLeft: "10px" }}></i>
          <h2>Welcome {name}</h2>
         <button onClick={e => logout(e)} className="btn btn-primary">
            Logout
          </button>
        </div>
      </nav>



 
      {reports.map((info, index) => (
        <Cards
          key={index}
          index={index}
          info={info}
          deleteReport={deleteReport}
        />
      ))}






    </div>
  );
}

export default AdminDashboard;
