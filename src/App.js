import './App.css';

import React from 'react';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {branch, compose, lifecycle, renderComponent, withState} from 'recompose';
import {store} from './store';
import {Scenes} from './scenes';
import {CriticalUIError} from './components/CriticalUIError';
import {logCriticalUIError} from './actions';
import {criticalUIErrorSelector} from './reducers';

const AppLayout = () => (
    <Router>
        <main>
            <Scenes/>
        </main>
    </Router>
);

const mapStateToProps = state => ({
    criticalUIError: criticalUIErrorSelector(state)
});

const mapDispatchToProps = {logCriticalUIError};

const AppComposed = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidCatch(error, errorInfo) {
            this.props.logCriticalUIError({error, extra: errorInfo});
        }
    }),
    branch(
        props => props.criticalUIError,
        renderComponent(CriticalUIError),
    )
)(AppLayout);

const App = () => (
    <Provider store={store}>
        <AppComposed/>
    </Provider>
);

export {App};
