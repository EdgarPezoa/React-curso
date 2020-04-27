import React from "react";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    slider:{
        width:'100%',

    },
    div:{
        textAlign:'center'
    }
}));

export function Slick(){
    const classes = useStyles();
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings} className={classes.slider}>
          <div className={classes.div}>
            <h3>1</h3>
          </div>
          <div className={classes.div}>
            <h3>2</h3>
          </div>
          <div className={classes.div}>
            <h3>3</h3>
          </div>
          <div className={classes.div}>
            <h3>4</h3>
          </div>
          <div className={classes.div}>
            <h3>5</h3>
          </div>
          <div className={classes.div}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
}