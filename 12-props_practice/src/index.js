// Set up a React App from scratch
// Render an App component
// App should be in it's own file
// App should render 4 Joke componenets
// Each Joke should receive a "question" prop and a "punchline" prop
// Some jokes only have a punchline, no question
// If you don't pass in a question, only show the punchline

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
