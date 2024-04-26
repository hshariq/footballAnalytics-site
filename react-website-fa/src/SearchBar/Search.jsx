import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchBar from "./SearchBar";

function Search() {
  const navigate = useNavigate();
  const [playeranalysis, setPlayerAnalysis] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ResponsiveAppBar></ResponsiveAppBar>

      <div className="heading" style={{ marginBottom: "20px" }}>
        <Typography
          variant="h4"
          noWrap
          component="a"
          sx={{
            fontFamily: "monospace",
            fontWeight: 5000,
            letterSpacing: ".5rem",
            textDecoration: "none",
            color: "#ffffff",
            alignContent: "center",
          }}
        >
          FOOTBALL ANALYTICS
        </Typography>
        <div className="search">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Search;
