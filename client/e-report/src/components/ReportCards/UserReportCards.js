import React, { useState } from 'react';
// import { Dropdown } from "react-bootstrap";
import "../UserDashboard/UserDashboard.css"
// import "bootstrap/dist/css/bootstrap.css";




const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="accordion-wrapper">

        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </div>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>

  );
};


const UserReportCards = ({ info, index, deleteReport }) =>
  <div className="todo">
    <div className="wrapper" style={{ borderRadius: "10px", marginTop: "20px" }}>

      <div className="card-body">
        <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
        <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>
        <h5 className="card-title font-weight-bold text-uppercase form-font">Date: {info.date}</h5>
        <h5 className="card-title font-weight-bold text-uppercase form-font">Time: {info.time}</h5>
        <button className="editbutton" style={{ fontSize: "14px", position: "relative", bottom: "60px", left: "750px" }}>Edit</button>
        <button className="delbutton" style={{ fontSize: "14px", position: "relative", bottom: "60px", left: "790px" }} onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-1.5x"></i></button>
        <div>
          <Accordion title="View details">
            <div className="myview" style={{ backgroundColor: "white", padding: "10px", borderTop: "4px solid rgba(0, 0, 0, 0.25)" }}>
              {/* <h5>{info.category}</h5>
              <h5>{info.localgovernment}</h5> */}
              <div>
                <p>{info.details}</p>
              </div>
              <div>
                <img className="card-img" src={info.imageurl} alt="" style={{ width: "300px", height: "200px" }} />
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  </div>








// <div className="todo">
//     <div className="card" style={{ width: "18rem" }}>

//         <div className="card-body">

//             <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
//             {/* <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5> */}
//             {/* <p className="card-text"> {info.details} </p> */}
//             {/* <img className="card-img-top" src={info.imageurl} alt="" style={{ width: "200px", height: "150px" }} /> */}
//             <div className="edit-delete">
//                 <button ><i className="fa fa-pencil-square-o fa-2x"></i></button>
//                 <button onClick={() => deleteReport(index, info)}> <i className="fa fa-trash fa-2x"></i></button>
//             </div>
//             <Dropdown>
//                 <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
//                     View Details
//                  </Dropdown.Toggle>

//                 <Dropdown.Menu style={{ width: "400px", backgroundColor: "grey" }}>
//                     <Dropdown.Item > Details: {info.details}</Dropdown.Item>
//                     <Dropdown.Item >LG: {info.localgovernment}</Dropdown.Item>
//                     <Dropdown.Item >Category: {info.category}</Dropdown.Item>
//                     <Dropdown.Item >Private Report: {info.privatereport.toString()}</Dropdown.Item>
//                     <Dropdown.Item >Report Status: {info.status}</Dropdown.Item>
//                     <Dropdown.Item ><img className="card-img-top" src={info.imageurl} alt="" style={{ width: "200px", height: "150px" }} /></Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>

//         </div>
//     </div>
// </div>;



export default UserReportCards;