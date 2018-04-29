import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../Page.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
});
