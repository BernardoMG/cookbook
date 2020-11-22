import { makeStyles } from '@material-ui/core/styles';

/**
 * Style for CookBook component.
 */
export const cookBookStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

/**
 * Style for Logo component.
 */
export const logoStyles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%'
  }
}));

/**
 * Style for RecipesList component.
 */
export const recipesListStyles = makeStyles((theme) => ({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));

/**
 * Style for RecipeCard component.
 */
export const recipeCardStyles = makeStyles((theme) => ({
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