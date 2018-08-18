import React from 'react';
import {Provider} from 'react-redux';

const withStoreProvider = store => Wrapper => props => (
    <Provider store={store}>
        <Wrapper {...props} />
    </Provider>
);

export {withStoreProvider};
