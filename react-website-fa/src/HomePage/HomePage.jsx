import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import './HomePage.css'


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
    navigate("/search");
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
              fontWeight: 5000,
              letterSpacing: '.5rem',
              textDecoration: 'none',
              color: '#ffffff',
              alignContent:'center'
            }}
          >
            FOOTBALL ANALYTICS 
        </Typography>
        </div>
      <Card sx={{ backgroundColor: "#0c2222",marginTop:'-250px'}}>
        <CardContent>
          <div className="welcome">
            <Typography
              variant="h6"
              component="div"
              className="welcome-text"
              sx={{
                mx: 'auto',
                fontFamily: 'monospace',
                fontWeight: 5000,
                textDecoration: 'none',
                color: '#ffffff',
                alignContent:'center'
              }}
            >
              WELCOME TO FOOTBALL ANALYTICS!
            </Typography>
            <Typography
              variant="body1"
              component="div"
              className="description"
              sx={{
                mx: 'auto',
                fontFamily: 'monospace',
                fontWeight: 5000,
                textDecoration: 'none',
                color: '#ffffff',
                alignContent:'center'
              }}
            >
              AT FOOTBALL ANALYTICS, WE'RE PASSIONATE ABOUT HELPING FOOTBALL
              TEAMS UNLOCK THE FULL POTENTIAL OF THEIR GAME. WHETHER YOU'RE
              LOOKING TO ANALYZE YOUR TEAM'S PERFORMANCE FROM MATCH FOOTAGE OR
              SEARCHING FOR SPECIFIC MATCHES TO EXTRACT VALUABLE DATA, YOU'VE
              COME TO THE RIGHT PLACE.
            </Typography>
            <Typography
              variant="body1"
              component="div"
              className="description"
              sx={{
                mx: 'auto',
                fontFamily: 'monospace',
                fontWeight: 5000,
                textDecoration: 'none',
                color: '#ffffff',
                alignContent:'center'
              }}
            >
              HERE'S WHAT YOU CAN DO ON OUR PLATFORM:
              <ul style={{ textAlign: "left" }}>
                <li>
                  <ProceedButton onClick={handleClose}>
                    Upload match footage for analysis
                  </ProceedButton>
                </li>
                <li>
                  <ProceedButton onClick={revert}>
                    Search for your own team's match
                  </ProceedButton>
                </li>
              </ul>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
