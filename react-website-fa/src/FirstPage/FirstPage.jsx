import React from "react";
import Grid from "@mui/material/Grid";
import img from "../images/Pitch.jpg";
import img2 from "../images/football-player.png";
import Donut from "./Donut";
import Navbar from "../NavBar/navbar";
import {useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";

function FirstPage() {

  const navigate = useNavigate()
  const Clickity = (event) => {
    event.preventDefault();
    navigate("/yo")
    console.log('Div cliockedddd')
  }
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "40px" }}>
          {" "}
          FOOTBALL ANALYTICS
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "65vh",
          }}
        >
          <img src={img} alt="Pitch" style={{ bottom: "570px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              top: "220px",
              left: "447px",
              width: "130px",
              height: "100px",
              borderRadius: "10px",
              backgroundColor: "#0C2222",
              boxShadow: "inset 0px 0px 1px 2px rgba(0, 0, 0, 0.1)",
              color: "white",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            Total Minutes 258
          </div>
          <div
            style={{
              position: "absolute",
              top: "180px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "130px",
              height: "100px",
              color: "white",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            <Donut />
          </div>
          <div
            style={{
              position: "absolute",
              top: "220px",
              left: "907px",
              width: "130px",
              height: "100px",
              borderRadius: "10px",
              backgroundColor: "#0C2222",
              boxShadow: "inset 0px 0px 1px 2px rgba(0, 0, 0, 0.1)",
              color: "white",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            Avg Ratings 7.58
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "absolute",
              top: "360px",
              left: "550px",
              width: "400px",
              height: "250px",
              borderRadius: "50px",
              backgroundColor: "#0C2222",
              boxShadow: "inset 0px 0px 1px 2px rgba(0, 0, 0, 0.1)",
              color: "white",
              textAlign: "center",
              fontSize: "28px",
              zIndex: 0,
              
            }}
            
            onClick={Clickity}
          > 
            <div style={{ marginTop: "10px" }}>PLAYER ANALYSIS</div>
            <div
              style={{
                width: "100%",
                height: "5px",
                backgroundColor: "white",
                position: "absolute",
                top: "57.5%",
                zIndex: -1,
              }}
            ></div>
            <img
              src={img2}
              alt="Football PLayers"
              style={{ height: "66%", marginTop: "20px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "80%",
                left: "-80px",
                width: "0",
                height: "0",
                borderTop: "50px solid transparent",
                borderBottom: "50px solid transparent",
                borderRight: "50px solid #F9104F",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "80%",
                right: "-80px",
                width: "0",
                height: "0",
                borderTop: "50px solid transparent",
                borderBottom: "50px solid transparent",
                borderLeft: "50px solid #F9104F",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
