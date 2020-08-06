import React,{Fragment}  from "react";
import "./UserDashboard.css";
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';




const Cards = ({ info, index, deleteReport }) => {
    


    return (
        <Fragment>
            <div className="todo">
                <div className="card" style={{ borderRadius: "10px" }}>

                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-uppercase form-font">{info.category} at {info.address}</h5>
                        <h5 className="card-title font-weight-bold text-uppercase form-font"> {info.localgovernment}</h5>
                        <p className="card-text"> {info.details} </p>

                        <div className="edit-delete">
                            <button style={{ fontSize: "12px" }}>Edit</button>
                            <button onClick={() => deleteReport(index)}> <i className="fa fa-trash fa-1.5x"></i></button>
                        </div>

                        <div className="drop">
                            <Dropdown color="primary" label="view details">
                                <DropdownItem link="#/link1" className="look">{info.details}</DropdownItem>
                                <DropdownItem className="look">{info.localgovernment}</DropdownItem>
                                <DropdownItem className="look">{info.category}</DropdownItem>
                                <DropdownItem className="look"><img className="card-img" src={info.imageurl} alt="" style={{ width: "200px", height: "150px" }} /></DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cards;