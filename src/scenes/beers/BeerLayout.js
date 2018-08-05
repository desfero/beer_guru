import React from 'react';
import {SimilarBeers} from './SimilarBeers';

const BeerLayout = ({beer}) => (
    <section>
        <header>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
        </header>
        <span>
            <strong>IBU:</strong> {beer.ibu}
        </span>
        <span>
            <strong>ABV:</strong> {beer.abv}
        </span>
        <span>
            <strong>EBC:</strong> {beer.ebc}
        </span>
        <p>{beer.description}</p>
        <section>
            <h4>Best served with:</h4>
            <ul>
                {
                    beer.food_pairing
                        .map((pairing, i) => <li key={i}>{pairing}</li>)
                }
            </ul>
        </section>
        <aside>
            <SimilarBeers beer={beer}/>
        </aside>
    </section>
);

const BeerNotFoundLayout = () => 'Beer with specified id not found';

export {BeerLayout, BeerNotFoundLayout};
