import React from 'react';
import {makeStyles, AppBar, Toolbar, IconButton, MenuIcon, Typography, Button, Container, Grid, Menu, MenuItem} from '@material-ui/core';
//import MenuIcon from '@material-ui/icons/Menu';
import logo from '../img/LOGO.png';
import { TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
      height: '100vh',
  },
  appBar: {
      boxShadow: 'none',
  },
  widthbar: {
    maxwidth: '80%',
    margin: '0 auto',
  },
  Icon: {
    paddingTop: '8px',
    paddingLeft: '24px',
    paddingBottom: '8px',
  },
  Grow: {
    flexGrow: 1,
    paddingRight: theme.spacing(0.6),
    marginRight: '24px'
  },
  button: {
    paddingRight: theme.spacing(0.6),
    color: '#15c465',
    background: '#ffffff',
    animation: 'pulse 1.5s infinite',
    fontFamily: '',
    '&:hover': {
      paddingRight: theme.spacing(0.6),
      backgroundColor: '#15c465',
      color: '#ffffff',
    }
  },
  button2: {

  }
}));

function Bar2(){
    const classes = useStyles();

    return <div>
        <AppBar color="inherit" className = {classes.appBar}>
        <Toolbar classesName = {classes.widthbar}>
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
        <Button className={classes.button} variant="outlined" color="#15c465">Área do Aluno</Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>;
}

export default Bar2
