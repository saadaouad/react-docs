import React from 'react';
import ReactDOM from 'react-dom';
import HappyHacking from '../index.js';

it('HappyHacking renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HappyHacking />, div);
});
