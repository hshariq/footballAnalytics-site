import * as React from "react";
import "./UploadVid.css";
import Typography from "@mui/material/Typography";
import matchupload from "./matchupload.png";
import video from "./08fd33_0.mp4";
import Button from "@mui/material/Button";

function UploadVid() {
  return (
    <div className="container">
      <div className="aboutvid">
        <img src={matchupload}></img>
      </div>
      <div className="videocon">
        <div className="vid">
          <video autoPlay={true} src={video}></video>
        </div>
        <div className="bt">
          <Button variant="contained">Try Now</Button>
        </div>
      </div>
    </div>
  );
}

export default UploadVid;
