import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import Logo from './Logo';

describe('Logo', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders img tag child', () => {
    const { container } = render(<Logo />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <img
        alt="logo"
        class="makeStyles-img-2"
        src="logo.jpeg"
      />
    `);
  });
});