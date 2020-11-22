import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CookBookLogo from './../assets/imgs/logo.jpeg' 

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%'
  }
}));

/**
 * App logo component.
 */
const Logo = () => {
  const classes = useStyles();

  return (
    <img className={classes.img} src ={CookBookLogo} alt={'logo'} />
  );
}

export default Logo;