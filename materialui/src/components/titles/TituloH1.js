import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titulo:{
        textAlign:'center'
    }
}));

export function TituloH1({children}){
    const classes = useStyles();
    return(
        <Typography className={ classes.titulo } variant="h3" component="h1" gutterBottom>{children}</Typography>
    )
}