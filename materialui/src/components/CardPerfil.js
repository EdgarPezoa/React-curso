import React from 'react';
import { TituloH2 } from '../components/titles/TituloH2';
import { Parrafo } from '../components/titles/Parrafo';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        'margin-top':theme.spacing(2),
        'margin-bottom':theme.spacing(3)
    },
    media: {
        height: 340,
        textAlign: 'center'
    },
    cita:{
        fontStyle:'italic'
    }
}));

export function CardPerfil ({nombre, cita, link, imagen}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={2}>
            <CardActionArea href={ link } target="_blank">
                <CardMedia
                    className={ classes.media }
                    image={ imagen }
                    title={ nombre }
                />
                <CardContent>
                    <TituloH2>{nombre}</TituloH2>
                    <Parrafo className={ classes.cita } color="textSecondary" >{ cita }</Parrafo>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}