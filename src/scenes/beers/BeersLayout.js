import React from 'react';
import {CardGroup} from '../../components/CardGroup';
import {LinkCard} from '../../components/Card';
import {BEER_ROUTE, withParams} from '../../constants/routes';

const BeersLayout = ({beers}) => (
    <CardGroup>
        {
            beers.map(beer => (
                <LinkCard key={beer.id} to={withParams(BEER_ROUTE, { beerId: beer.id })}>
                    <img src={beer.image_url} alt="" height="100"/>
                    <h2>
                        {beer.name}
                    </h2>
                </LinkCard>
            ))
        }
    </CardGroup>
);

export {BeersLayout};
