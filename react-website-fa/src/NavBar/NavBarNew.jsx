import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import logo from './loog.png'
import './NavBarNew.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";



const pages = ["About Us", "Our Services"];
var settings = ["Logout"];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean);
  const [decoded,setDecoded] = React.useState("");
  const [reloadKey, setReloadKey] = React.useState(0);
 
  const navigate = useNavigate();

  const gotohome = () => {
    reloadComponent()
    navigate('/home')
  }

  const reloadComponent = () => {
    setReloadKey(prevKey => prevKey + 1);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const gotoAboutUS = () => {
    setAnchorElNav(null);
    navigate("/about")
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    if (isLoggedIn == true) {
      navigate('/')
      window.location.reload();
    }
    else {
      navigate('/')
    }
  }


  useEffect(() => {
    var token = localStorage.getItem("token");
      if (token == null) {
        setIsLoggedIn(false);
        settings = ["Login"];
      } else {
        setIsLoggedIn(true)
        settings = ["Logout"]
        setDecoded(jwtDecode(token));

      }
  },[])



  return (
    <div key={reloadKey}>
    <AppBar
      position="sticky"
      
      sx={{
        backgroundColor: "#FFFFFF",
        height: "10vh",
        top: "calc(0px-1px)",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="fan-logo" src={logo} onClick={gotohome}/>
          {/* <SportsSoccerRoundedIcon
            sx={{
              color: "#0c2222",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#0c2222",
              textDecoration: "none",
            }}
          >
            FOOTBALL ANALYTICS
          </Typography> */}
          

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
             
                <MenuItem>
                  <Typography textAlign="center">About us </Typography>
                </MenuItem>
             
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={gotoAboutUS}
                sx={{ my: 2, color: "#0c2222", display: "block",fontWeight:'1000' }}
              >
                About us 
              </Button>
              <Button
                sx={{ my: 2, color: "#0c2222", display: "block",fontWeight:'1000' }}
              >
                Contact Us
              </Button>
           </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Person2RoundedIcon
                  sx={{
                    color: "#0c2222",
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                  }}
                />
                <Typography sx={{fontWeight:'1000',color: "#0c2222",fontSize:'20px' }}>
                  {isLoggedIn? `${decoded.username}`:"Please Login"}
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
