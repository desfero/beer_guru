import {branch, compose, lifecycle, renderComponent} from 'recompose';
import {connect} from 'react-redux';
import {BeersLayout} from './BeersLayout';
import {getBeers} from './actions';
import {Loading} from '../../components/Loading';
import {withSceneTitle} from '../../hocs/withSceneTitle';
import {withInfiniteScroll} from '../../hocs/withInfiniteScroll';
import {beersAsArraySelector} from './selectors';

const mapStateToProps = state => ({
    beers: beersAsArraySelector(state)
});

const mapDispatchToProps = {getBeers};

const Beers = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.getBeers(1);
        }
    }),
    branch(props => !props.beers, renderComponent(Loading)),
    withSceneTitle(() => 'Beers list'),
    withInfiniteScroll(props => ({loadMore: props.getBeers, hasMore: true})),
)(BeersLayout);

export {Beers};
