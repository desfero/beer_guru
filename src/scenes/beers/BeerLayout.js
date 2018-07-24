import React from 'react';

const BeerLayout = ({beer}) => (
    <sectino>
        <header>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
        </header>
        <span>
            <strong>IBU:</strong>
            {beer.ibu}
        </span>
        <span>
            <strong>ABV:</strong>
            {beer.abv}
        </span>
        <span>
            <strong>EBC:</strong>
            {beer.ebc}
        </span>
        <section>
            <p>{beer.description}</p>
            <h4>
                Best served with:
            </h4>
            <ul aria-labelledby="servedWithHeading">
                {beer.food_pairing.map((pairing, i) => <li key={i}>{pairing}</li>)}
            </ul>
        </section>
    </sectino>
);

const BeerNotFoundLayout = () => 'Beer with specified id not found';

export {BeerLayout, BeerNotFoundLayout};
