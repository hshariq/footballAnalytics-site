import React, { useState } from "react";
import img2 from "../images/football-player.png";
import img1 from '../images/team.png'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "./FirstPagee.css";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



function FirstPagee() {
  const navigate = useNavigate();
  const [playeranalysis, setPlayerAnalysis] = useState(true);
  const [isVisible,setIsVisible]  = useState(false);

  const ProceedButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#0c2222',
    fontSize: '1rem',
    fontWeight: 5000,
    letterSpacing: '.5rem',
    fontFamily: 'monospace',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#0c2222',
    },
  }));

  const Clickity = (event) => {
    event.preventDefault();
    navigate(`/analysis/${playeranalysis}`);
  };

  const revert = (event) => {
    event.preventDefault();
    setPlayerAnalysis(!playeranalysis);
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
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
        <div className="second-heading"><Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mx: 'auto',
              fontFamily: 'monospace',
              fontWeight: 5000,
              letterSpacing: '.5rem',
              textDecoration: 'none',
              color: '#ffffff'
            }}
          >
            CHOOSE YOUR ANALYSIS
        </Typography></div>
        
        <div className="page-container">
          <div className="player-analysis">
              <div className="label">
              <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mx: 'auto',
                fontFamily: 'monospace',
                fontWeight: 5000,
                letterSpacing: '.5rem',
                textDecoration: 'none',
                color: '#ffffff'
              }}
            >
                {playeranalysis ? "PLAYER ANALYSIS" : "TEAM ANALYSIS"}
                </Typography>
              </div>
              <img src={playeranalysis? img2: img1} alt="Football Players" />
              <div className="triangle-left" onClick={revert}></div>
              <ProceedButton className="proceed"
              variant="contained"

              onClick={Clickity}
                >Perform Analysis</ProceedButton>
              <div className="triangle-right" onClick={revert}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPagee;
