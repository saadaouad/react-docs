import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from '../index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginControl />, div);
});
