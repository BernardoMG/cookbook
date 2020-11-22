import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import { recipePhotos } from './util/photo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
  },
  media: {
    height: 160
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 0
  },
  subtitle: {
    fontWeight: 'normal',
    marginBottom: 0
  },
  tags: {
    display: 'flex',
    paddingTop: '10px'
  },
  type: {
    ...theme.typography.button,
    textDecorationColor: '#282c34',
    textAlign: 'center',
    paddingTop: '3px',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  chef: {
    marginTop: '3px',
    paddingRight: '5px',
    textAlign: 'right',
    border: 'none',
    backgroundColor: 'transparent'
  },
  chefIcon: {
    marginTop: '3px'
  }
}));

/**
 * Recipe card component.
 * Renders recipe information.
 */
const RecipeCard = (props) => {
  const classes = useStyles();

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