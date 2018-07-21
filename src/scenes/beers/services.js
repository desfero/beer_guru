import {PUNK_API_URL} from '../../constants/config';

const BEERS_PER_PAGE = 21;

const fetchBeers = () => fetch(`${PUNK_API_URL}beers?per_page=${BEERS_PER_PAGE}`).then(r => r.json());

const API = {fetchBeers};

export { API };
