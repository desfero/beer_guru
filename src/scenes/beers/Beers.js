import React from 'react';
import {branch, compose, lifecycle, renderComponent} from 'recompose';
import {connect} from 'react-redux';
import {BeersLayout} from './BeersLayout';
import {getBeers} from './actions';
import {beersSelector} from './reducer';
import {Loading} from '../../components/Loading';
import {withSceneTitle} from '../../hocs/withSceneTitle';

const mapStateToProps = state => ({
    beers: beersSelector(state)
});

const mapDispatchToProps = {getBeers};

const Beers = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.getBeers();
        }
    }),
    branch(props => !props.beers, renderComponent(Loading)),
    withSceneTitle(() => "Beers list"),

)(BeersLayout);

export {Beers};
