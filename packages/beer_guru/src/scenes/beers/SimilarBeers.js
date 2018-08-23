import { branch, compose, lifecycle, renderComponent, renderNothing, withProps } from 'recompose';
import { connect } from 'react-redux';
import { cardType, Loader } from '@beer/layout';
import { BeersLayout } from './BeersLayout';
import { getSimilarBeers } from './actions';
import { similarBeersAsArraySelector } from './selectors';
import { similarBeersErrorSelector } from './reducer';

const mapStateToProps = state => ({
    beers: similarBeersAsArraySelector(state),
    fetchError: similarBeersErrorSelector(state)
});

const mapDispatchToProps = { getSimilarBeers };

const SimilarBeers = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            const { ibu, abv, ebc } = this.props.beer;

            this.props.getSimilarBeers({ ibu, abv, ebc });
        },
        componentDidUpdate(prevProps) {
            if (this.props.beer !== prevProps.beer) {
                const { ibu, abv, ebc } = this.props.beer;

                this.props.getSimilarBeers({ ibu, abv, ebc });
            }
        }
    }),
    branch(props => props.fetchError, renderNothing),
    branch(props => !props.beers, renderComponent(Loader)),
    withProps({
        cardType: cardType.lite,
        showBeerTagline: false,
    })
)(BeersLayout);

export { SimilarBeers };
