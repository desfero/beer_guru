import './App.css';

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {Scenes} from './scenes';

const App = () => (
    <Provider store={store}>
        <Scenes />
    </Provider>
);

export {App};
