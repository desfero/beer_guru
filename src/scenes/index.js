import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Beers, beersReducer, beersSaga} from './beers';
import {ROOT} from '../constants/routes';

const sagas = [
    beersSaga(),
];

const reducers = {
    beers: beersReducer,
};

const Scenes = () => (
    <Router>
        <Switch>
            <Route
                exact
                path={ROOT}
                render={() => <Beers title="Beers list" />}
            />
        </Switch>
    </Router>
);

export { Scenes, sagas, reducers };
