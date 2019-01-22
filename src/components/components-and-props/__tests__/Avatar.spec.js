import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '../Avatar';

it('Avatar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar />, div);
});
