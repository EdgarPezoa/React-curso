import React from 'react';
import { CardPerfil } from '../components/CardPerfil';
import { Accordion} from '../components/Accordion';
import { TituloH1 } from '../components/titles/TituloH1';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    'margin-top':theme.spacing(2),
    'margin-bottom':theme.spacing(3)
    },
}));

export function Perfil(){
    const classes = useStyles();
    const panels =[
        {
            titulo: 'Motivacion',
            subtitulo:'A la hora de desarrollar',
            contenido: 'De niño...'
        },
        {
            titulo: 'Backend',
            subtitulo:'PHP - JavaScript',
            contenido: 'Desde años...'
        },
        {
            titulo: 'Frontend',
            subtitulo:'Angular - React',
            contenido: 'Nunca...'
        },
        {
            titulo: 'Contacto',
            subtitulo:'',
            contenido: 'Email: Pezoa.1@gmail.com'
        },
    ];

    return(
        <Fade in={true}>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <TituloH1>Perfil</TituloH1>
                    <Grid 
                        container
                        spacing={2}
                        justify="center"
                        
                    >
                        <Grid item xs={6}>
                        <CardPerfil
                          nombre="Edgar Leonardo Pezoa Soto"
                          imagen="https://scontent.fscl15-1.fna.fbcdn.net/v/t1.0-9/92617305_10221753647894200_6981449423884648448_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=n5nyINsPYK4AX9QhXeW&_nc_ht=scontent.fscl15-1.fna&oh=bda0d57901374cade7232da3f87eedac&oe=5EB96B4A"
                          cita="“Investigamos, estudiamos y fabricamos soluciones para aumentar la calidad de vida de las personas”."
                          link="https://github.com/EdgarPezoa"
                         />
                        </Grid>
                        <Grid item xs={6}>
                            <Accordion
                                panels={ panels }
                            ></Accordion>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Fade>
    )
}