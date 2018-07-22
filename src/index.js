import './polyfills';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {initConfig} from './config';

import './index.css';

initConfig();

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
