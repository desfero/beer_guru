import './polyfills';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {initConfig} from './config';


initConfig();

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
