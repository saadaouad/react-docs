import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HellWorld from './hello-world/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HellWorld />, document.getElementById('root'));
registerServiceWorker();
