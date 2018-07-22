import React from 'react';
import {branch, compose, lifecycle, renderComponent} from 'recompose';
import {connect} from 'react-redux';
import {setActiveBeer} from './actions';
import {beerSelector} from './selectors';
import {Loading} from '../../components/Loading';
import {withSceneTitle} from '../../hocs/withSceneTitle';
import {BeerLayout} from './BeerLayout';
import {withModal} from '../../hocs/withModal';

const mapStateToProps = (state) => ({
    beer: beerSelector(state)
});

const mapDispatchToProps = {setActiveBeer};

const Beer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            console.log(this.props);
            this.props.setActiveBeer(this.props.id);
        }
    }),
    withModal(),
    branch(props => !props.beer, renderComponent(Loading)),
    withSceneTitle(beer => beer.name),
)(BeerLayout);

export {Beer};
