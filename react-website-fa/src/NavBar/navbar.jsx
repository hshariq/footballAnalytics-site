import React from "react";
import { FaUser } from "react-icons/fa";
// import "./navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#170D2A",
        fontSize: "30px",
        color: "white",
        height: "50px",
        position: "fixed", // Add this line
        top: 0, // Add this line
        width: "100%", // Change "110%" to "100%"
        left: 0, // Add this line
      }}
    >
      <div
        className="navbar-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="nav-options" style={{ display: "flex", gap: "30px" }}>
          <div
            className="nav-option"
            style={{
              marginTop: "10px",
              marginLeft: "40px",
            }}
          >
            SignUp
          </div>
          <div className="nav-option" style={{ marginTop: "10px" }}>
            My Team
          </div>
        </div>
        <div
          className="nav-options"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginRight: "40px",
            marginTop: "10px",
          }}
        >
          <div className="nav-option">Gunners FC</div>
          <FaUser className="profile-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
