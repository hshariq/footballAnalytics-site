import * as React from 'react';
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function AnalysisCard() {
return(
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
)
};

export default AnalysisCard;

{/* <Typography
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
            </Typography> */}
            {/* <Typography
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
            </Typography> */}


