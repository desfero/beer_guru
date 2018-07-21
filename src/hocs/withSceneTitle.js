import React from 'react';
import {Helmet} from 'react-helmet';

const withSceneTitle = (sceneTitle = undefined) => Wrapper => ({ title = sceneTitle, ...passThroughProps }) => (
    <React.Fragment>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Wrapper {...passThroughProps} />
    </React.Fragment>
);

export { withSceneTitle };
