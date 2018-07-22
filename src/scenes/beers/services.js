import {PUNK_API_URL} from '../../constants/config';

const BEERS_PER_PAGE = 21;

const fetchBeers = page => fetch(`${PUNK_API_URL}beers?per_page=${BEERS_PER_PAGE}&page=${page}`).then(r => r.json());

const API = {fetchBeers};

export { API };
