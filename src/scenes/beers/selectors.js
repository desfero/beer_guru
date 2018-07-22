import {propEq, find, ifElse, always, and} from 'ramda';
import {createSelector} from 'reselect';
import {beersSelector, selectedBeerIdSelector} from './reducer';

const beerSelector = createSelector(
    selectedBeerIdSelector,
    beersSelector,
    ifElse(
        and,
        (id, beers) => find(propEq('id', +id), beers),
        always(null),
    ),
);


export {beersSelector, beerSelector};
