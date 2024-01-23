import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./Login.css";
import img from "../images/login.jpg";
//react-website-fa\src\images\login.jpg
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

function Login() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(" + img + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ backgroundColor: "#201A2B" }}
      >
        <Box
          sx={{
            my: 10,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
          <h1 className="headerofLogin" variant="h5" style={{ color: "white" }}>
            LOGIN AS USER
          </h1>
          <Box
            className="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 5, backgroundColor: "white", borderRadius: "5%" }}
          >
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="my-text-fieldLU"
            />
            {/* {emailError} */}
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // value={pw}
              // onChange={(e) => setPasswrod(e.target.value)}
              className="my-text-fieldLU"
            />
            {/* {passwordError}
            <h6 className="LoginError">{loginError}</h6> */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // onClick={handleSubmit}
                sx={{
                  mt: -5,
                  mb: 8,
                  width: "70%",
                  backgroundColor: "#311E57",
                  "&:hover": {
                    backgroundColor: "#201A2B",
                  },
                }}
                className="bt"
              >
                Log In
              </Button>
            </div>
            <Typography
              variant="h"
              color="text.secondary"
              sx={{ ml: 12, zIndex: 1 }}
            >
              Do not have an account?
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // onClick={handleSubmit}
                sx={{
                  mt: -5,
                  mb: 8,
                  width: "70%",
                  backgroundColor: "#311E57",
                  "&:hover": {
                    backgroundColor: "#201A2B",
                  },
                }}
                className="bt"
              >
                Sign Up
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // marginBottom: "10px",
              }}
            >
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: -5,
                  mb: 8,
                  width: "70%",
                  backgroundColor: "#311E57",
                  "&:hover": {
                    backgroundColor: "#201A2B",
                  },
                }}
                className="bt"
              > */}
              {/* <Link to="/signupU">SIGNUP</Link> */}
              {/* </Button> */}
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
  //     <div className="wrapper">
  //       <form action="">
  //         <h1>LOGIN</h1>
  //         <div className="img">
  //           <img src={form} alt="Form" className="img1" />
  //         </div>
  //         <div className="input-box">
  //           <input type="text" placeholder="username" required />
  //           <FaUser className="icon" />
  //         </div>
  //         <div className="input-box">
  //           <input type="password" placeholder="password" required />
  //           <FaLock className="icon" />
  //         </div>
  //         <button type="submit">Login</button>

  //         <div className="register-link">
  //           <p>
  //             Don't have an account? <a href="/register">Register Here</a>
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
}
export default Login;
