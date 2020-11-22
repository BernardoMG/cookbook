import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import CookBook from './components/CookBook';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/'>
        <CookBook />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
