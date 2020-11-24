import React from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './RecipeCard';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const recipe = {
  'title': 'Cauliflower “Steak”',
  'subtitle': 'with Almond-Olive Relish and Beans',
  'category': {
    'displayText': 'Veggie'
  },
  'chef': {
    'name': 'Dawn Perry'
  },
  'assumedIngredients': [
    {
      'name': 'coarse salt'
    },
    {
      'name': 'freshly ground black pepper'
    },
    {
      'name': 'olive oil'
    }
  ]
};

const setupComponent = () => (
  <RecipeCard recipe={recipe} photoIndex={1} />
);

describe('RecipeCard', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(setupComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders childs correctly', () => {
    const component = mount(setupComponent());
    
    expect(component.find('WithStyles(ForwardRef(Card))').length).toBe(1);
    expect(component.find('WithStyles(ForwardRef(CardActionArea))').length).toBe(1);
    expect(component.find('WithStyles(ForwardRef(CardMedia))').length).toBe(1);
    expect(component.find('WithStyles(ForwardRef(CardContent))').length).toBe(1);
    expect(component.find('WithStyles(ForwardRef(Typography))').length).toBe(3);
    expect(component.find('WithStyles(ForwardRef(Grid))').length).toBe(3);

    const typography = component.find('WithStyles(ForwardRef(Typography))');
    expect(component.find('WithStyles(ForwardRef(CardMedia))').props().image).toBe('recipe-2.png');
    expect(typography.first().props().children).toBe('Cauliflower “Steak”');
    expect(typography.at(1).props().children).toBe('with Almond-Olive Relish and Beans');
    expect(typography.at(2).props().children).toBe('by Dawn Perry');
  });
});