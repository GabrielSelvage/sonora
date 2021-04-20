import React, { Component} from "react";
import Banner from "../../img/banner.png";
import {makeStyles, Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classes from "../../../src/pages/landing/index.js";
import CardMedia from '@material-ui/core/CardMedia';
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
    },
    media: {
        height: 140,
      }
}));

function LandingPage(){
    useStyles();
        return(
            <div>
                    <img src={Banner} 
                        style={
                        {position: 'relative', 
                        zIndex: '1', 
                        height: '950px',
                        width: '100%'}}/>
                <Card 
                    style={
                        {marginTop: '-850px', 
                        position: 'relative', 
                        zIndex: '2', 
                        color: '#ffdb00', 
                        marginLeft: '330px', 
                        marginRight: '330px', 
                        backgroundColor: 'transparent'}}>
                    <CardContent>
                        <h1 
                        style={{fontSize: '60px', 
                        fontFamily: "Visby CF Light",
                        textAlign: 'center'}}>Aprenda música  
                        <b style={{fontFamily: "Visby CF Extra Bold"}}> gaúcha</b> com os melhores.</h1>
                    </CardContent>
                        <h4 
                        style={
                        {zIndex:'15', 
                        color: 'white', 
                        textAlign: 'center', 
                        marginLeft: '80px', 
                        marginRight: '80px', 
                        marginTop: '-10px',
                        fontSize: '14px',
                        fontFamily: "Visby CF Regular",
                    }
                        }>A Sonora reuniu uma seleção com os maiores nomes da música gaúcha para levar, passo a passo, todo o conhecimento até você!</h4>
                    <ReactPlayer
                        style={
                        {backgroundColor: 'yellow', 
                        marginTop: '30px', 
                        zIndex: '5', 
                        border: '2px solid #ffffff',
                        maxWidth: '80%',
                        maxHeight: '300px',
                        marginLeft: '60px',

                        }}
                        url='https://youtu.be/hulUlkJWrvQ' 
                        />

                    <Button style={{color: 'white',
                            background: 'transparent',
                            fontFamily: "Visby CF Heavy",
                            border: '2px solid white',
                            borderRadius: 100,
                            marginTop: '40px',
                            marginLeft: '200px',
                            zIndex: '35',
                            padding: '10px',
                            animation: 'pulse 1.5s infinite',
                            '&:hover': {
                            backgroundColor: '#ffffff',
                            color: 'black',
                            border: '2px solid #15c465',
                            borderRadius: 100,
                            marginRight: '10px',
                            zIndex: '35',
                            }}}>Conheça Nossos Cursos
                    </Button>

                </Card>
            </div>
                
        )
}

export default LandingPage