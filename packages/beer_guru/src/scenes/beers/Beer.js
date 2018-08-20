import {branch, compose, lifecycle, renderComponent, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {isEmpty} from 'ramda';
import {setActiveBeer} from './actions';
import {beerSelector} from './selectors';
import {BigLoader} from '@beer/layout';
import {withSceneTitle} from '../../hocs/withSceneTitle';
import {BeerLayout, BeerNotFoundLayout} from './BeerLayout';
import {withModal} from '../../hocs/withModal';
import {ROOT_ROUTE} from '../../constants/routes';

const mapStateToProps = (state) => ({
    beer: beerSelector(state)
});

const mapDispatchToProps = {setActiveBeer};

const Beer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.setActiveBeer(+this.props.id);
        },
        componentDidUpdate() {
            this.props.setActiveBeer(+this.props.id);
        },
    }),
    withHandlers({
        closeModal: ({history}) => () => history.push(ROOT_ROUTE),
    }),
    withModal(props => ({
        onRequestClose: props.closeModal,
    })),
    branch(props => !props.beer, renderComponent(BigLoader)),
    branch(props => isEmpty(props.beer), renderComponent(BeerNotFoundLayout)),
    withSceneTitle(beer => beer.name),
)(BeerLayout);

export {Beer};
