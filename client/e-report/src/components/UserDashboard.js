import React from 'react';
import logo from '../../src/Logo.svg';


function UserDashboard() {
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
                </div>
            </nav>



        </div>
    );
}

export default UserDashboard;
