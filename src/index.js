import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routes/index.js';
import registerServiceWorker from './registerServiceWorker';

import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
