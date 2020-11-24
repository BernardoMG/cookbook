import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CookBook from './CookBook';

Enzyme.configure({ adapter: new Adapter() });

const setupComponent = () => (
  <CookBook />
);

describe('CookBook', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(setupComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});