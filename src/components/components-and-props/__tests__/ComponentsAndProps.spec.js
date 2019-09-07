import React from 'react';
import ReactDOM from 'react-dom';
import ComponentsAndProps from '../index.js';

it('ComponentsAndProps renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentsAndProps />, div);
});
