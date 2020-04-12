import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Parrafo ({children, className, color="initial"}){
    return(
        <Typography className={ className } variant="body2" color={ color } component="p">{ children }</Typography>
    )
}