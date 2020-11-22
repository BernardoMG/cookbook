import React from 'react';
import CookBookLogo from './../assets/imgs/logo.jpeg' 
import { logoStyles } from './styles/theme';

/**
 * App logo component.
 */
const Logo = () => {
  const classes = logoStyles();

  return (
    <img className={classes.img} src ={CookBookLogo} alt={'logo'} />
  );
}

export default Logo;