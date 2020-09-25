/*
Create the boilerplate to get React to render something in the screen
Render <App /> component, which you'll need to create separately
Create 2 new components - Header and MemeGenerator
Header will only display things
MemeGenerator will ve calling to an API and holding on to data
Each should be in their own file of the same name

Initialize state to save the following data:
  top text
  bottom text
  random image(initialize with "http://i.imgflip.com/1bij.jpg")

We'll be using an API that provides a bunch of meme images.
Your task: make an API call to "https://api.imgflip.com/get_memes" and save the
data that comes back ('response.data.memes') to a new state property called
'allMemeImgs' (the data that comes back is an array)

Create 2 input fields, one for the top text and one for the bottom text
Remember that these will be "controlled forms", so make sure to add
all the attributes you'll need for that to work

Create the onChange handler method
It should update the corresponding state on every change of the input box

Create a method that, when the "Gen" button is clicked, chooses one of the
memes from our 'allMemeImgs' array at random and makes it so that is the
meme image that shows up in the bottom portion of our meme generator
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
