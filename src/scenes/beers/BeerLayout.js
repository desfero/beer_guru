import React from 'react';

const BeerLayout = ({ beer }) => (
        <h3>{beer.name}</h3>
);

const BeerNotFoundLayout = () => 'Beer with specified id not found';

export {BeerLayout, BeerNotFoundLayout};
