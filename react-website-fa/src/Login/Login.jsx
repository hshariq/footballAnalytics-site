import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import axios from "axios";
import ResponsiveAppBar from "../NavBar/NavBarNew";

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
              color: "#FFFFFF", // Set label text color to white when focused
            },
            "& label": {
              color: "#FFFFFF", // Set label text color to white
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

function Login() {
  const SearchButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#201A2B",
    fontSize: "1rem",
    fontWeight: 5000,
    letterSpacing: ".5rem",
    fontFamily: "monospace",
    border: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#201A2B",
    },
  }));

  const outerTheme = useTheme();
  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState(false);
  const [pw, setPW] = useState("");
  const [pwerror, setPwError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register')
  }

  const handleLogin = () => {
      console.log("in login func")
      if (email == ""){
       setEmailError(true)
      }
      else if(pw == "") {
        setPwError(true)
      }
      else {
        setPwError(false)
        setEmailError(false)
        let data = JSON.stringify({
          "user_email": `${email}`,
          "user_password": `${pw}`
        });
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:5000/users',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          var token = (JSON.stringify(response.data));
          localStorage.setItem("token", token);
          navigate('/home')
        })
        .catch((error) => {
          console.log(error);
        });

      }

  }
  React.useEffect(() => {
    localStorage.removeItem("token");
  })

  return (
    <div>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <div className="page-container">
        <div className="left-side"></div>
        <Box
          className="form-container"
          sx={{
            mt: 5,
            backgroundColor: "white",
            borderRadius: "5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <Typography
              className="heading"
              variant="h4"
              noWrap
              component="a"
              sx={{
                fontFamily: "monospace",
                fontWeight: 5000,
                letterSpacing: ".5rem",
                textDecoration: "none",
                color: "#201A2B",
                alignContent: "center",
              }}
            >
              LOGIN AS USER
            </Typography>
            <Box
              className="fields-container"
              sx={{
                mt: 5,
                backgroundColor: "#201A2B",
                borderRadius: "5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack direction="column" spacing={3}>
                <TextField
                  className="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  error={emailerror}
                />
                <TextField
                  className="password"
                  label="Password"
                  type="password"
                  value={pw}
                  onChange={(e) => setPW(e.target.value)}
                  margin="normal"
                  error={pwerror}
                />
              </Stack>
            </Box>
          </ThemeProvider>
          <SearchButton className="login-button" variant="contained"
          onClick={handleLogin}>
            Login
          </SearchButton>
          <Stack className="register-row"
           direction="column" spacing={0.5}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                fontFamily: "monospace",
                fontWeight: 5000,
                textDecoration: "none",
                color: "#201A2B",
                alignContent: "center",
              }}
            >
              Are you a new user?
            </Typography>
            <SearchButton className="register-button" variant="contained"
              onClick={handleRegister}>
              Register
            </SearchButton>
          </Stack>
        </Box>
        <div className="right-side"></div>
      </div>
    </div>
  );
}

export default Login;
