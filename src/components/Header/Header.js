import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import '../Header/Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography variant="h6" className={classes.title}>
          <a className='navbar' href='/home'>Home</a>
         
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header