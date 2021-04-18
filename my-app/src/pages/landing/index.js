import React, { Component} from "react";
import Banner from "../../img/banner.png";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
    },
    img: {
        maxwidth: '60%',
        height: 'auto'
    }
}));

function LandingPage(){
    useStyles();
        return(
            <div>
                <img src={Banner}/>
            </div>
        )
}

export default LandingPage