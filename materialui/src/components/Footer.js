import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%',
  },
  paper:{
    'background-color':"#f8f9fa",
    'text-align':'center',
    width:'100%',
    padding:'10px',
    display:'flex',
    'justify-content':'center',
    'align-items':'center'
  },
  icon:{
      'margin-left':'5px',
      'margin-right':'5px'
  },
  link:{}
}));

export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square elevation={1} >Desarrollado con <FavoriteIcon className={classes.icon} /> <Link className={classes.link}  href="https://edgarpezoa.cl/" target='_blank'>Edgar Pezoa</Link>  </Paper>
    </div>
  );
}