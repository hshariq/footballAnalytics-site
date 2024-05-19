import * as React from "react";
import "./UploadVid.css";
import Typography from "@mui/material/Typography";
import searchmatch from "./searchmatch.png";
import video from "./08fd33_0.mp4";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SearchMatch() {
  const navigate = useNavigate()
  const handclick = () => {
    navigate('/carousel')
  }
  return (
    <div className="container">
      <div className="aboutvid">
        <img src={searchmatch}></img>
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

export default SearchMatch;
