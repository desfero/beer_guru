import React from "react";
import { Route, Switch } from "react-router-dom";
import { Beers, beersReducer, beersSaga, Beer } from "./beers";
import { BEER_ROUTE, ROOT_ROUTE } from "../constants/routes";

const sagas = [beersSaga()];

const reducers = {
  beers: beersReducer,
};

const Scenes = () => (
  <React.Fragment>
    <Switch>
      <Route path={ROOT_ROUTE} render={() => <Beers />} />
    </Switch>
    <Route
      exact
      path={BEER_ROUTE}
      render={({ match }) => <Beer id={match.params.beerId} />}
    />
  </React.Fragment>
);

export { Scenes, sagas, reducers };
