import React from 'react';
import logo from '../../src/Logo.svg';

function AdminLogin() {
    return (
        <div style={{ fontFamily: "Open Sans", fontStyle: "normal", fontWeight: "normal" }}>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo" />
                <div style={{ display: "flex" }}>
                    <h3 style={{ color: "white", marginRight: "10px" }}>Admin Log in</h3>
                    <i class="fa fa-lock fa-3x"></i>
                </div>
            </nav>

        </div>
    );
}

export default AdminLogin;
