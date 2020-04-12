import React, { useState , useEffect } from 'react';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Components
import { TituloH1 } from '../components/titles/TituloH1';
import { TituloH2 } from '../components/titles/TituloH2';
import { CardPerfil } from '../components/CardPerfil';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    'margin-top':theme.spacing(2),
    'margin-bottom':theme.spacing(4)
    }
}));


export function DatosApi(){
    const [personas, setPersonas] = useState([]);
    const classes = useStyles();

    const getPersonasApi = ()=>{
        fetch('https://react-test-api-99b92.firebaseio.com/personas.json')
            .then( response => response.json())
            .then( data => {
                setPersonas(data);
            })
        
    }

    const renderPersonas = () => {
        return(
            Object.keys(personas).map((persona)=>{
                return(
                    <Grow in={true}>
                        <Grid item lg={4}>
                            <CardPerfil
                                nombre = { personas[persona].nombre }
                                imagen = { personas[persona].imagen }
                                cita = { personas[persona].cita }
                                link = { personas[persona].link }
                            />
                        </Grid>
                    </Grow>
                )
            })
        )
    }

    useEffect(() => {
        getPersonasApi();
    });

    return(
        <Fade in={true}>
            <Container className={ classes.root } maxWidth="lg">
                <TituloH1>Datos desde API-REST</TituloH1>
                <TituloH2 color="textSecondary">https://react-test-api-99b92.firebaseio.com/personas.json</TituloH2>
                <Grid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                >
                    { renderPersonas() }
                </Grid>
            </Container>
        </Fade>
    )
}