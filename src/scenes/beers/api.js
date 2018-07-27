import {head} from 'ramda';
import {PUNK_API_URL} from '../../constants/config';
import {fetchWithError, queryString} from '../../helpers';

const BEERS_PER_PAGE = 21;

const fetchBeers = ({
    per_page = BEERS_PER_PAGE,
    page = 1,
    ...additionalArgs
}) => fetchWithError(`${PUNK_API_URL}beers?${queryString({ per_page, page, ...additionalArgs })}`);

const fetchBeer = id => fetchWithError(`${PUNK_API_URL}beers/${id}`)
        .then(head);

const API = {fetchBeers, fetchBeer};

export {API};
