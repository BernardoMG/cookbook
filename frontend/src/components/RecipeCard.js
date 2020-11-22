import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import { recipePhotos } from './util/photo';
import { recipeCardStyles } from './styles/theme';

/**
 * Recipe card component.
 * Renders recipe information.
 */
const RecipeCard = (props) => {
  const classes = recipeCardStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={recipePhotos[props.photo_index]}
        />
        <CardContent>
          <Typography className={classes.title}  variant='subtitle1' gutterBottom>
            {props.recipe.title}
          </Typography>
          <Typography className={classes.subtitle}  variant='caption' gutterBottom>
            {props.recipe.subtitle}
          </Typography>
          <div className={classes.tags}>
            <Grid item xs={2} className={classes.type}>
              <Paper elevation={8}>
                {props.recipe.category['displayText'].toUpperCase()}
              </Paper>
            </Grid>
            <Grid item xs={9} className={classes.chef}>
              <Typography variant='subtitle2'>
                {`by ${props.recipe.chef['name']}`}
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.chefIcon}>
              <RestaurantRoundedIcon fontSize='small'/>
            </Grid>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RecipeCard;