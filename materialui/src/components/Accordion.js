import React from 'react';
import { TituloH2 } from '../components/titles/TituloH2';
import { Parrafo } from '../components/titles/Parrafo';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    'margin-top':theme.spacing(2),
    'margin-bottom':theme.spacing(3)
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
    descriptionPanel:{
        display:'flex',
        justifyContent:'center'
    }
}));

export function Accordion ({panels}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handlePanel = () => {
        return(
            Object.keys(panels).map( (panel) => {
                return(
                    <ExpansionPanel key={ panel } expanded={expanded === panel} onChange={handleChange(panel)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Parrafo className={ classes.heading } >{ panels[panel].titulo }</Parrafo>
                            <Parrafo className={ classes.secondaryHeading } >{ panels[panel].subtitulo }</Parrafo>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Parrafo>{ panels[panel].contenido }</Parrafo>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })
        );
    };
  
    return (
      <div className={classes.root}>
        <TituloH2>Experiencia</TituloH2>
        { handlePanel() }

      </div>
    );
  }