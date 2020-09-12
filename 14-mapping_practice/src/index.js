// Given a list of products (as an array of objects)
// render a <Product /> component for each product in the list
// Use the array' .map() method and dont forget to pass a 'key' prop

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
