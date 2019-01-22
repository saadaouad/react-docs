import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../index.js';

it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
