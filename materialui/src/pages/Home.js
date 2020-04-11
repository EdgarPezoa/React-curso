    import React from 'react';
    import Container from '@material-ui/core/Container';
    import { TabsCustom } from '../components/TabsCustom';
    import Grid from '@material-ui/core/Grid';
    import Typography from '@material-ui/core/Typography';
    import { makeStyles } from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
    import Divider from '@material-ui/core/Divider';

    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        'margin-top':theme.spacing(2),
        'margin-bottom':theme.spacing(2)
        },
        titulo:{
            textAlign:'center'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    }));

    export function Home() {
        const classes = useStyles();

        return(
            <div className={classes.root}>
                <Typography className={classes.titulo} variant="h3" component="h1" gutterBottom> Prueba de Material-UI </Typography>
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item lg={12}>
                            <Paper className={classes.paper} elevation={2} >
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </Paper>
                        </Grid>
                        <Grid item lg={6} xl={12}>
                            <Paper className={classes.paper} elevation={2} >
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </Paper>
                        </Grid>
                        <Grid item lg={6} xl={12}>
                            <Paper className={classes.paper} elevation={2} >
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Divider />
                    <TabsCustom className={classes.tabs}></TabsCustom>
                </Container>
            </div>
        )
    }