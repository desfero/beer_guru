import {branch, compose, lifecycle, renderComponent, renderNothing} from 'recompose';
import {connect} from 'react-redux';
import {BeersLayout} from './BeersLayout';
import {getSimilarBeers} from './actions';
import {similarBeersAsArraySelector} from './selectors';
import {Loading} from '../../components/Loading';
import {similarBeersErrorSelector} from './reducer';

const mapStateToProps = state => ({
    beers: similarBeersAsArraySelector(state),
    fetchError: similarBeersErrorSelector(state)
});

const mapDispatchToProps = {getSimilarBeers};

const SimilarBeers = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.getSimilarBeers({
                ibu: this.props.ibu,
                abv: this.props.abv,
                ebc: this.props.ebc,
            });
        }
    }),
    branch(props => props.fetchError, renderNothing),
    branch(props => !props.beers, renderComponent(Loading)),
)(BeersLayout);

export {SimilarBeers};
