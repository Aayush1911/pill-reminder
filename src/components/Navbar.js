import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          💊 Pill Reminder
          </Typography>
          <Link to='/' style={{position:'absolute',left:'250px',color:'white' }}>
            <Button  color="inherit">Home</Button>
        </Link>
          <Link to='/addpill' style={{color:'white' }}>
            <Button style={{margin:'0px 50px'}} color="inherit">Add Reminder</Button>
        </Link>
        <Link to='/about'>
          <Button style={{color:'white'}} color="inherit">About us</Button>
        </Link>
        <Link to='/login'>
          <Button style={{color:'white'}} color="inherit">Login</Button>
        </Link>
        <Link to='/signup'>
          <Button style={{color:'white'}} color="inherit">SignUp</Button>
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}