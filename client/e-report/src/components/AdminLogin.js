import React, {Component} from 'react';
import logo from '../../src/Logo.svg';

class AdminLogin extends Component {
    render() {
        return (
            <div style={{ fontFamily: "Open Sans", fontStyle: "normal", fontWeight: "normal" }}>
                <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                    <img src={logo} alt="Logo" />
                    <div style={{ display: "flex" }}>
                        <h6 style={{ color: "white", marginRight: "10px" }}>Admin Log in</h6>
                        {/* <i class="fa fa-lock fa-3x"></i> */}
                    </div>
                </nav>
                <form onSubmit={this.onSubmit}>
                    <h5 className="log">Log in to E-report</h5>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-danger btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        )
    }
}

export default AdminLogin;
