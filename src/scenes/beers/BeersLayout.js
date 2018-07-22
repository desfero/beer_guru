import React from 'react';
import {CardGroup} from '../../components/CardGroup';
import {Card} from '../../components/Card';

const BeersLayout = ({beers}) => (
    <CardGroup>
        {
            beers.map(beer => (
                <Card key={beer.id}>
                    <img src={beer.image_url} alt="" height="100"/>
                    <h2>
                        {beer.name}
                    </h2>
                </Card>
            ))
        }
    </CardGroup>
);

export {BeersLayout};
