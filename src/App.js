import './App.css';

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './store';
import {Scenes} from './scenes';

const App = () => (
    <Provider store={store}>
        <Router>
            <main>
                <Scenes/>
            </main>
        </Router>
    </Provider>
);

export {App};
