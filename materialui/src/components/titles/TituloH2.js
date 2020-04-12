import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titulo:{
        textAlign:'center'
    }
}));

export function TituloH2({children, color="initial"}){
    const classes = useStyles();
    return(
        <Typography className={ classes.titulo } color={ color } variant="h4" component="h2" gutterBottom>{children}</Typography>
    )
}