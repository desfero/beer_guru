import {ifElse, always, and} from 'ramda';
import {createSelector} from 'reselect';
import {beersOrderSelector, beersSelector, selectedBeerIdSelector} from './reducer';

const beersAsArraySelector = createSelector(
    beersOrderSelector,
    beersSelector,
    ifElse(
        and,
        (order, beers) => order.map(id => beers[id]),
        always(null),
    ),
);

const beerSelector = createSelector(
    selectedBeerIdSelector,
    beersSelector,
    ifElse(
        and,
        (id, beers) => beers[id],
        always(null),
    ),
);


export {beersAsArraySelector, beerSelector};
