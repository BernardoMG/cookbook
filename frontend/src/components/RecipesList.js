import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import RecipeCard from './RecipeCard';
import { recipesListStyles } from './styles/theme';

/**
 * Recipes list template.
 * Renders recipe list considering the backend response.
 */
const RecipesList = () => {
  const classes = recipesListStyles();
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState({
    recipes: []
  })

  /**
   * Creates a RecipeCard component for each recipe provided by the backend.
   * @function
   * @param {oject} recipes - hash with all the recipes information.
   * @returns {Array} all the child components.
   */
  function buildRecipeCard(recipes) {
    const cards = [];
    recipes.forEach(function (recipe, index) {
      cards.push(
        <Grid item xs={6} sm={3} key={index}>
          <RecipeCard key={index} recipe={recipe} photoIndex={index} />
        </Grid>
      )
    });
    return cards;
  }

  /**
   * Performs HTTP request to fetch recipes from the backend.
   * @function
   */
  async function fetchRecipes() {
    const res = await fetch('http://localhost:8080/');
    res
      .json()
      .then(res => setState({ recipes: res['recipes'] }))
      .then(res => setIsLoading(false))
      .catch(err => alert('Service is unavailable :/. Please contact our support team.'));
  }

  /**
   * Effect hook.
   * @function
   */
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