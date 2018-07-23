import {head} from 'ramda';
import {PUNK_API_URL} from '../../constants/config';
import {fetchWithError} from '../../helpers';

const BEERS_PER_PAGE = 21;

const fetchBeers = page => fetchWithError(`${PUNK_API_URL}beers?per_page=${BEERS_PER_PAGE}&page=${page}`);

const fetchBeer = id => fetchWithError(`${PUNK_API_URL}beers/${id}`)
        .then(head);

const API = {fetchBeers, fetchBeer};

export {API};
