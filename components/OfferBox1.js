import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';


export default function MediaControlCard() {
  
  const theme = useTheme();
  const useStyles = makeStyles({
  button: {
    backgroundColor: '#2E3B55',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2E3B55',
      color: '#fff',
  },
}})
const classes = useStyles()

  return (
    <div>
      <br/>
    <Card sx={{maxWidth: 650,maxHeight:150}}>
      <Box sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 ,height:100}}
        image="https://st.redbus.in/Images/RHSS/2022/hero/100x100.png"
        alt="Live from space album cover"
      />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          SAVE UPTO RS 300* ON YOUR BUS TICKETS.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Book your favourite seat now.
          </Typography>
          <Button className={classes.button} variant='contained'>BOOK NOW</Button>
        </CardContent>
      </Box>
      
    </Card>
    </div>
  );
}
