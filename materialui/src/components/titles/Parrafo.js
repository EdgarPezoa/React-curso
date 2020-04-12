import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Parrafo ({children, className, color="initial", variant="body2"}){
    return(
        <Typography className={ className } variant={ variant } color={ color } component="p">{ children }</Typography>
    )
}