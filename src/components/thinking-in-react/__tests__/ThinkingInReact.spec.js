import React from 'react';
import ReactDOM from 'react-dom';
import ThinkingInReact from '../';

it('Thinking in React renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThinkingInReact />, div);
});
