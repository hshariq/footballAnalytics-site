import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import './Register.css'
import ResponsiveAppBar from "../NavBar/NavBarNew";
import axios from "axios"

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

function Register() {
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
    const [cpw, setCPW] = useState("");
    const [cpwerror, setCPwError] = useState(false);
    const [username,setUsername] = useState("");
    const [usernameerror,setUsernameError] = useState(false);
    const [pwmatcherror, setPwMatchError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/login')
    }

    const handleRegister = () => {
      if (email == ""){
        setEmailError(true)
       }
       else if(pw == "") {
         setPwError(true)
       }
       else if(cpw == "") {
        setCPwError(true)
      }
      else if(username == "") {
        setUsernameError(true)
      }
      else {
        if (pw != cpw){
          setPwMatchError("Passwords do not match")
        }
        else {
          let data = JSON.stringify({
            "username": `${username}`,
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
            console.log(JSON.stringify(response.data));
            console.log("registered")
            navigate('/login')
          })
          .catch((error) => {
            console.log(error);
          });
          

        }
      }
    }
  
    return (
      <div>
         <ResponsiveAppBar></ResponsiveAppBar>
        <div className="register-page">
          <div className="left-side"></div>
          <Box
            className="register-form"
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
                className="register-heading"
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
                REGISTER AS USER
              </Typography>
              <Box
                className="register-fields"
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
                    className="username"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    error={usernameerror}
                  />
                  <TextField
                    className="register-email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    error={emailerror}
                  />
                  <TextField
                    className="register-password"
                    label="Password"
                    type="password"
                    value={pw}
                    onChange={(e) => setPW(e.target.value)}
                    margin="normal"
                    error={pwerror}
                  />
                   <TextField
                    className="confirm-password"
                    label="Confirm Password"
                    type="password"
                    value={cpw}
                    onChange={(e) => setCPW(e.target.value)}
                    margin="normal"
                    error={cpwerror}
                  />
                </Stack>
              </Box>
            </ThemeProvider>
            <SearchButton className="register-bt" variant="contained"
            onClick={handleRegister}>
              Register
            </SearchButton>
            <Stack className="login-row"
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
                Already have an account?
              </Typography>
              <SearchButton className="login-bt" variant="contained"
                onClick={handleLogin}>
                Login
              </SearchButton>
            </Stack>
          </Box>
          <div className="right-side"></div>
        </div>
      </div>
    );
  }

  export default Register;