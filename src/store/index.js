import Raven from 'raven-js';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createRavenMiddleware from 'raven-for-redux';
import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware({
    onError: e => Raven.captureException(e)
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            createRavenMiddleware(Raven),
        )
    ),
);

sagaMiddleware.run(rootSaga);

export {store};
