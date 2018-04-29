import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from '../UserInfo.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfo />, div);
});
