import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../SearchBar/Searchbar.css";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { Grid } from "@mui/material";
import axios from "axios";
import { useRef } from "react";

const options1 = [
  "Manchester City",
  "Manchester United",
  "Arsenal",
  "Liverpool",
];

const options2 = [
  "Manchester City",
  "Manchester United",
  "Arsenal",
  "Liverpool",
];

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#FFFFFF",
            "--TextField-brandBorderHoverColor": "#FFFFFF",
            "--TextField-brandBorderFocusedColor": "#FFFFFF",
            "& label.Mui-focused": {
              color: "#FFFFFF",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            color: "#FFFFFF",
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function SearchBar() {
  const outerTheme = useTheme();

  const handleSearch = () => {
    var str = `sofa score ${team1} vs ${team2} ${date}`;
    let data = JSON.stringify({
      search_query: str,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/matchid",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("API NOT WORKIMNG");
      });
    console.log(str);
  };

  const SearchButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#0c2222",
    fontSize: "1rem",
    fontWeight: 5000,
    letterSpacing: ".5rem",
    fontFamily: "monospace",
    border: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#0c2222",
    },
  }));

  const [openmenu1, setopenmenu1] = React.useState(null);
  const [openmenu2, setopenmenu2] = React.useState(null);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [date, setDate] = useState("");
  const textFieldRef = useRef(null);
  const textFieldRef2 = useRef(null);

  const handleMenuTeam1Click = (name) => {
    setTeam1(name);
    // console.log(`${team1}`);
    setopenmenu1(null);
  };

  const handleMenuTeam2Click = (name) => {
    setTeam2(name);
    // console.log(`${team1}`);
    setopenmenu2(null);
  };

  const handleTeam1Change = (event) => {
    setopenmenu1(true);
    setTeam1(event.target.value);
    console.log(team1);
  };

  const handleTeam2Change = (event) => {
    setopenmenu2(true);
    setTeam2(event.target.value);
    console.log(team2);
  };

  const handleOpen1 = () => {
    setopenmenu1(true);
  };

  const handleOpen2 = () => {
    setopenmenu2(true);
  };

  return (
    <div className="searchbox">
      <div className="card">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Stack direction="row" spacing={3}>
            {/* <TextField
              label="Team 1"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              margin="normal"
  /> */}

            <TextField
              label="Team 1"
              value={team1}
              onChange={handleTeam1Change}
              margin="normal"
              onClick={handleOpen1}
              ref={textFieldRef}
            />

            {openmenu1 && (
              <div
                className="search-bar-dropdown1"
                style={{
                  position: "absolute",
                  top:
                    textFieldRef.current.offsetTop +
                    textFieldRef.current.offsetHeight,
                  left: textFieldRef.current.offsetLeft,
                  width: textFieldRef.current.offsetWidth,
                }}
              >
                {options1
                  .filter((item) =>
                    item.toLowerCase().includes(team1.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="search-bar-dropdown-item1"
                      onClick={() => handleMenuTeam1Click(item)}
                    >
                      {item}
                    </div>
                  ))}
              </div>
            )}

            <div className="vs">vs</div>
            <TextField
               label="Team 2"
               value={team2}
               onChange={handleTeam2Change}
               margin="normal"
               onClick={handleOpen2}
               ref={textFieldRef2}
            />
            {openmenu2 && (
              <div
                className="search-bar-dropdown2"
                style={{
                  position: "absolute",
                  top:
                    textFieldRef2.current.offsetTop +
                    textFieldRef2.current.offsetHeight,
                  left: textFieldRef2.current.offsetLeft,
                  width: textFieldRef2.current.offsetWidth,
                }}
              >
                {options2
                  .filter((item) =>
                    item.toLowerCase().includes(team2.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="search-bar-dropdown-item2"
                      onClick={() => handleMenuTeam2Click(item)}
                    >
                      {item}
                    </div>
                  ))}
              </div>
            )}
          </Stack>
          <Grid item xs={12}>
            <TextField
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              margin="normal"
              InputProps={{
                style: { color: "#FFFFFF" }, // Set color to white
              }}
            />
          </Grid>
          <SearchButton
            className="search"
            variant="contained"
            onClick={handleSearch}
          >
            Search
          </SearchButton>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SearchBar;
