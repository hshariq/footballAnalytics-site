import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import img from "../images/Pitch.jpg";
import img2 from "../images/football-player.png";
import Donut from "./Donut";
import Navbar from "../NavBar/navbar";
import { useNavigate } from "react-router-dom";
import "./FirstPagee.css"; // Import the CSS file
import UploadVideo from "../UploadPage/UploadVideo";


function FirstPagee() {
  const navigate = useNavigate();
  const [playeranalysis, setPlayerAnalysis] = useState(true);
  const [isVisible,setIsVisible]  = useState(false);

  const Clickity = (event) => {
    event.preventDefault();
    navigate(`/analysis/${playeranalysis}`);
  };

  const revert = (event) => {
    event.preventDefault();
    console.log(!playeranalysis)
    console.log("wdlkjfwlkerflrekjfhljksdh");
    setPlayerAnalysis(!playeranalysis);
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="heading">FOOTBALL ANALYTICS</h1>
        <div className="page-container">
          <img src={img} alt="Pitch" style={{ bottom: "570px" }} />
          <div className="card total-minutes">Total Minutes 258</div>
          <div className="card avg-ratings">Avg Ratings 7.58</div>

          <div className="player-analysis">
            <div className="label">
              {playeranalysis ? "Player Analysis" : "Team Analysis"}
            </div>
            <img src={img2} alt="Football Players" />
            <div className="triangle-left" onClick={revert}></div>
            <button className="proceed" onClick={Clickity}>
              Perform Analysis
            </button>
            <div className="triangle-right" onClick={revert}></div>
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
        </div>
      </div>
    </div>
  );
}

export default FirstPagee;
