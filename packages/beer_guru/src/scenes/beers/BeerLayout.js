import React from 'react';
import styled from 'styled-components';
import {FormattedMessage} from 'react-intl';
import {SimilarBeers} from './SimilarBeers';

const BeerContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`;

const BeerImg = styled.img.attrs({
    alt: '',
})`
    margin-right: 2em;
    width: 80px;
`;

const BeerSection = styled.section`
    flex: 1;
`;

const BeerLayout = ({beer}) => (
    <React.Fragment>
        <BeerContainer>
            <BeerImg src={beer.image_url}/>
            <BeerSection>
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
            </BeerSection>
        </BeerContainer>

        <aside>
            <section>
                <h4><FormattedMessage id="beer.similar-beers" />:</h4>
                <SimilarBeers beer={beer}/>
            </section>
        </aside>
    </React.Fragment>
);

const BeerNotFoundLayout = () => 'Beer with specified id not found';

export {BeerLayout, BeerNotFoundLayout};
