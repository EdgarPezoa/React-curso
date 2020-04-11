import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    'margin-top':theme.spacing(2),
    'margin-bottom':theme.spacing(3)
    },
    titulo:{
        textAlign:'center'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

    media: {
        height: 340,
        textAlign: 'center'
      },
    cita:{
        fontStyle:'italic'
    },
    descriptionPanel:{
        display:'flex',
        justifyContent:'center'
    }
}));

export function Perfil(){
    const classes = useStyles();
    return(
        <Fade in={true}>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Typography className={classes.titulo} variant="h3" component="h1" gutterBottom> Perfil con ROUTER </Typography>
                    <Grid 
                        container
                        spacing={2}
                        justify="center"
                        
                    >
                        <Grid item xs={6}>
                        <CardPerfil />
                        </Grid>
                        <Grid item xs={6}>
                            <Accordion></Accordion>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Fade>
    )
}

function CardPerfil () {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={2}>
            <CardActionArea href="https://github.com/EdgarPezoa" target="_blank">
                <CardMedia
                className={classes.media}
                image="https://scontent.fscl15-1.fna.fbcdn.net/v/t1.0-9/92617305_10221753647894200_6981449423884648448_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=n5nyINsPYK4AX9QhXeW&_nc_ht=scontent.fscl15-1.fna&oh=bda0d57901374cade7232da3f87eedac&oe=5EB96B4A"
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.titulo} gutterBottom variant="h5" component="h2">
                        Edgar Leonardo Pezoa Soto
                    </Typography>
                    <Typography className={classes.cita} variant="body2" color="textSecondary" component="p">
                        “Investigamos, estudiamos y fabricamos soluciones para aumentar la calidad de vida de las personas”.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

function Accordion () {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={classes.root}>
        <Typography className={classes.titulo} gutterBottom variant="h5" component="h2">Experiencia</Typography>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Motivación</Typography>
            <Typography className={classes.secondaryHeading}>A la hora de desarrollar</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              De niño...
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Backend</Typography>
            <Typography className={classes.secondaryHeading}>PHP - JavaScript</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Desde años...
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Frontend</Typography>
            <Typography className={classes.secondaryHeading}>Angular - React</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunca...
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Datos de contacto</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.descriptionPanel}>
            <Typography display="block">
              Email: Pezoa.1@gmail.com
              <Divider />
              Whatsapp: +56945560327
            </Typography >
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }