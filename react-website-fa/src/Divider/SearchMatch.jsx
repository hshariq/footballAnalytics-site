import * as React from "react";
import "./UploadVid.css";
import Typography from "@mui/material/Typography";
import searchmatch from "./searchmatch.png";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function SearchMatch() {
  const navigate = useNavigate()
  const handclick = () => {
    navigate('/carousel')
  }
  const link = "https://firebasestorage.googleapis.com/v0/b/uploadimage-2ed90.appspot.com/o/upload%2Foutput_video%20(2).mp4?alt=media&token=8109efbd-baef-4dff-aa79-6e3b90b5eb89"

  return (
    <div className="container">
      <div className="aboutvid">
        <img src={searchmatch}></img>
      </div>
      <div className="videocon">
        <div className="vid">
          <video autoPlay={true} src={link}></video>
        </div>
        <div className="bt">
          <Button variant="contained" onClick={handclick}>Try Now</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchMatch;
