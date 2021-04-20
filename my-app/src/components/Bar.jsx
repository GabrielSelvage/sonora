import React from 'react';
import {makeStyles, AppBar, Toolbar, IconButton, MenuIcon, Typography, Button, Container, Grid, Menu, MenuItem} from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';
import logo from '../img/LOGO.png';
import { TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
      height: '16.5vh',
      width: '100%',
      position: 'fixed',
      backgroundColor: '#ffffff'
  },
  appBar: {
      boxShadow: 'none',
      
  },
  widthbar: {
    width: '55%',
    margin: '0 auto',
    position: 'fixed'
  },
  Icon: {
    paddingTop: '26px',
    paddingLeft: '24px',
    paddingBottom: '26px',
    maxWidth: '200px'
  },
  Grow: {
    flexGrow: 1,
    padding: theme.spacing(0.8),
    marginRight: '24px'
  },
  button: {
    paddingRight: theme.spacing(0.8),
    color: '#15c465',
    background: '#ffffff',
    animation: 'pulse 1.5s infinite',
    fontFamily: "Visby CF Extra Bold",
    borderRadius: 100,
    marginRight: '10px',
    '&:hover': {
      padding: theme.spacing(0.8),
      backgroundColor: '#ffffff',
      color: '#15c465',
      border: '2px solid currentColor',
      borderRadius: 100,
      marginRight: '10px',
      fontFamily: "Visby CF Extra Bold",
    }
  },
  button2: {

  }
}));

function Bar2(){
    const classes = useStyles();

    return (
        <div className = {classes.root} style={{zIndex: '1050'}}>
          <AppBar color="inherit" className = {classes.appBar} style={{maxWidth: '85%', marginRight: '100px'}}>
            <Toolbar>
            <img src={logo}  className={classes.Icon}/>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/*<MenuIcon />*/}
            </IconButton>
            <div className={classes.Grow}></div>
            <div>
            <Button className={classes.button} >Sobre a Escola</Button>
            <Button className={classes.button}>Professores</Button>
            <Button className={classes.button}>Cursos</Button>
            <Button className={classes.button}>Assinar</Button>
            <Button className={classes.button}>Forum</Button>
            <Button className={classes.button}>Contact</Button>
            <Button className={classes.button}>Área do Aluno</Button>
            </div>
            </Toolbar>
          </AppBar>
        </div>
    );
}

export default Bar2
