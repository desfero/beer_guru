import React from 'react';
import { CardGroup, LinkCard } from '@beer/layout';
import { BEER_ROUTE, withParams } from '../../constants/routes';

const BeersLayout = ({ beers, cardType, showBeerTagline }) => (
    <CardGroup>
        {
            beers.map(beer => (
                <LinkCard type={cardType} key={beer.id} to={withParams(BEER_ROUTE, { beerId: beer.id })}>
                    <img src={beer.image_url} alt="" height="100"/>
                    <h2>{beer.name}</h2>
                    {showBeerTagline && <p>{beer.tagline}</p>}
                </LinkCard>
            ))
        }
    </CardGroup>
);

export { BeersLayout };
