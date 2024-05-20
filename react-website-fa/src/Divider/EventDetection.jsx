import * as React from "react";
import "./UploadVid.css";
import Typography from "@mui/material/Typography";
import eventdetection from "./eventdetection.png";

import Button from "@mui/material/Button";
import { getDownloadURL } from "firebase/storage";
import { listAll } from "firebase/storage";
import { storage } from "../firebase";
import { ref } from "firebase/storage";
import { useEffect } from "react";
function EventDetection() {
  const link = "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/upload%2Foutput_video.mp4?alt=media&token=b7dcbefe-7ad6-4a1e-89fc-4f2dcadaacf3"
  return (
    <div className="container">
      <div className="aboutvid">
        <img src={eventdetection}></img>
      </div>
      <div className="videocon">
        <div className="vid">
          <video autoPlay={true} src={link}></video>
        </div>
        <div className="bt">
          <Button variant="contained">Try Now</Button>
        </div>
      </div>
    </div>
  );
}

export default EventDetection;
