import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import './HomePage.css'
import match from './match upload.png'
import search from './searchformatch.png'
import event from './eventdetection.png'



function HomePage() {
  const navigate = useNavigate();

  const ProceedButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#0c2222",
    fontSize: "1rem",
    fontWeight: 5000,
    letterSpacing: ".5rem",
    fontFamily: "monospace",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#0c2222",
    },
  }));

  const handleClose = (event) => {
    event.preventDefault();
    navigate(`/analysis`);
  };

  const revert = (event) => {
    event.preventDefault();
    navigate("/divider");
  };

  return (
    <div style={{ textAlign: "center" }}>
       <ResponsiveAppBar></ResponsiveAppBar>
      <div className="heading">
      <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mx: 'auto',
              fontFamily: 'monospace',
              fontWeight: 1500,
              letterSpacing: '.5rem',
              textDecoration: 'none',
              color: '#ffffff',
              alignContent:'center'
            }}
          >
            FOOTBALL ANALYTICS 
        </Typography>
        </div>
        <div className="cards">
          <div className="upload">
          <img src={match}></img>
          </div>
          <div className="detection">
          <img src={event}></img>
          </div>
          <div className="searchmatch">
          <img src={search} onClick={revert}></img>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
