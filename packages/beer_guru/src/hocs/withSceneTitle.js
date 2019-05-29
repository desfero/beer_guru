import React from "react";
import { Helmet } from "react-helmet";

const withSceneTitle = getSceneTitle => Wrapper => props => {
  const title = getSceneTitle(props);

  return (
    <React.Fragment>
      {title && (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      )}
      <Wrapper {...props} />
    </React.Fragment>
  );
};

export { withSceneTitle };
