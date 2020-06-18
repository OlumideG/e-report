import React from 'react';
import logo from '../../src/Logo.svg';


// const Cards = ({ info, index, deleteReport }) => 
//   <div className="todo">
//     <div className="card" style={{ width: "18rem" }}>

//       <div className="card-body">
//         <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address} </h5>
//         <p className="card-text"> {info.details} </p>
//         {/* <p className="card-text"> {info.imageUrl} </p> */}
//         <img className="card-img-top" src={info.imageUrl} alt="report" style={{ width: "200px", height: "150px" }} />
//         <div className="edit-delete">
//           <button ><i className="fa fa-pencil-square-o fa-2x"></i></button>
//           <button onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-2x"></i></button>
//         </div>

//       </div>
//     </div>
//   </div>;



function AdminDashboard() {





  

  // const deleteReport = () => {
  //   console.log("deleted");
  // }


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
          <h2>Welcome </h2>
         <button  className="btn btn-primary">
            Logout
          </button>
        </div>
      </nav>



 
      {/* {reports.map((info, index) => (
        <Cards
          key={index}
          index={index}
          info={info}
          deleteReport={deleteReport}
        />
      ))} */}

   </div>
  );
}

export default AdminDashboard;
