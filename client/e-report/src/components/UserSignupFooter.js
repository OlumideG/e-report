import React from "react";
import { Link } from "react-router-dom";

function UserSignupFooter() {
  return (
    <div className="footerContainerSignup">
      <div>
        <Link>
          {" "}
          <h4>About</h4>{" "}
        </Link>
      </div>
      <div>
        <Link>
          <h4>Help</h4>{" "}
        </Link>
      </div>
      <div>
        <Link>
          {" "}
          <h4>Developers</h4>{" "}
        </Link>
      </div>
      <div>
        <Link>
          <h4>Privacy Policy</h4>
        </Link>
      </div>
      <div>
        <Link>
          <h4>Terms of Service</h4>
        </Link>
      </div>
    </div>
  );
}

export default UserSignupFooter;
