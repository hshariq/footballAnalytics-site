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
import { useEffect } from "react";


function HomePageComponent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean);
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

  const revert0 = (event) => {
    event.preventDefault();
    navigate("/divider?id=1");
  };
  const revert1 = (event) => {
    event.preventDefault();
    navigate("/divider?id=2");
  };
  const revert2= (event) => {
    event.preventDefault();
    navigate("/divider?id=3");
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
          <img src={match}
          onClick={revert0}></img>
          </div>
          <div className="detection">
          <img src={event}
          onClick={revert2}></img>
          </div>
          <div className="searchmatch">
          <img src={search} onClick={revert1}></img>
          </div>
        </div>
    </div>
  );
}


function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean);
  useEffect(() => {
    var token = localStorage.getItem("token");
      if (token == null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true)
      }
  },[])

  return (
    <div>
    {isLoggedIn ? <HomePageComponent/> : <div><ResponsiveAppBar/>
    PLEASE LOGIN</div>}
    </div>

  )


}

export default HomePage;
