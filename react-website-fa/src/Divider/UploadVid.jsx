import * as React from "react";
import "./UploadVid.css";
import Typography from "@mui/material/Typography";
import matchupload from "./matchupload.png";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function UploadVid() {
  const link = "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/upload%2F08fd33_0.mp4?alt=media&token=50e446d1-9f5e-46f0-bac5-f665436dd7f7"
  const navigate = useNavigate()
  const gotoUpload = () => {
    navigate('/upload')
  }


  return (
    <div className="container">
      <div className="aboutvid">
        <img src={matchupload}></img>
      </div>
      <div className="videocon">
        <div className="vid">
          <video autoPlay={true} src={link}></video>
        </div>
        <div className="bt">
          <Button variant="contained" onClick={gotoUpload}>Try Now</Button>
        </div>
      </div>
    </div>
  );
}

export default UploadVid;
