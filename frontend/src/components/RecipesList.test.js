import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import RecipesList from './RecipesList';

Enzyme.configure({ adapter: new Adapter() });

const backendResponse = {
  'recipes': [
    {
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
    }
  ]
};

const setupComponent = () => (
  <RecipesList />
);

describe('RecipesList', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(setupComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders recipes returned by the backend', () => {
    fetchMock.get(
      'http://localhost:8080/',
      backendResponse,
      { overwriteRoutes: true }
    );

    const component = mount(setupComponent());

    expect(component.find('WithStyles(ForwardRef(CircularProgress))').length).toBe(1);

    setImmediate(() => {
      component.update();
      expect(component.find('RecipeCard').length).toBe(1);
      expect(component.find('WithStyles(ForwardRef(CircularProgress))').length).toBe(0);
    });
  });
});