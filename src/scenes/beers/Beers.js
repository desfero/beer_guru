import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {BeersLayout} from './BeersLayout';
import {getBeers} from './actions';

const mapDispatchToProps = {getBeers};

const Beers = compose(
    connect(undefined, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.getBeers();
        }
    }),
)
(BeersLayout);

export {Beers};
