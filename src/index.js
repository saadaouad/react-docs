import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main-component/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
