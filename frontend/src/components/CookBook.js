import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import RecipesList from './RecipesList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

/**
 * Root component.
 * Renders recipes page.
 */
const CookBook = () => {
  const classes = useStyles();

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
}

export default CookBook;