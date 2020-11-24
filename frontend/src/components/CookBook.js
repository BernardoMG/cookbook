import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import RecipesList from './RecipesList';
import { cookBookStyles } from './styles/theme';

/**
 * Root component.
 * Renders recipes page.
 */
const CookBook = () => {
  const classes = cookBookStyles();

  return (
    <div className={classes.root}>
       <Grid container spacing={3}>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <RecipesList />
      </Grid>
    </div>
  );
};

export default CookBook;