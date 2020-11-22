import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles((theme) => ({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));

/**
 * Recipes list template.
 * Renders recipe list considering the backend response.
 */
const RecipesList = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState({
    recipes: []
  })

  function buildRecipeCard(recipes) {
    const cards = [];
    recipes.forEach(function (recipe, index) {
      cards.push(
        <Grid item xs={6} sm={3} key={index}>
          <RecipeCard key={index} recipe={recipe} photo_index={index} />
        </Grid>
      )
    });
    return cards;
  }

  async function fetchRecipes() {
    const res = await fetch('http://localhost:8080/');
    res
      .json()
      .then(res => setState({ recipes: res['recipes'] }))
      .then(res => setIsLoading(false))
      .catch(err => alert('Service is unavailable :/. Please contact our support team.'));
  }

  useEffect(() => {
    fetchRecipes();
  },[]);

  return (
    <React.Fragment>
      {isLoading ? 
        <CircularProgress className={classes.loading} /> 
        : (
          <React.Fragment>
            {buildRecipeCard(state.recipes)}
          </React.Fragment>
        )
      }
    </React.Fragment>
  );
}

export default RecipesList;