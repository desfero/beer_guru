import {always, head, ifElse} from 'ramda';
import {PUNK_API_URL} from '../../constants/config';
import {fetchWithError, queryString} from '../../helpers';
import {isPhone} from '../../theme/sizes';

const BEERS_PER_PAGE_DESKTOP = 21;
const BEERS_PER_PAGE_PHONE = 9;

const getBeersPerPage = ifElse(
    isPhone,
    always(BEERS_PER_PAGE_PHONE),
    always(BEERS_PER_PAGE_DESKTOP)
);

const fetchBeers = ({
    per_page = getBeersPerPage(),
    page = 1,
    ...additionalArgs
}) => fetchWithError(`${PUNK_API_URL}beers?${queryString({ per_page, page, ...additionalArgs })}`);

const fetchBeer = id => fetchWithError(`${PUNK_API_URL}beers/${id}`).then(head);

const API = {fetchBeers, fetchBeer};

export {API};
