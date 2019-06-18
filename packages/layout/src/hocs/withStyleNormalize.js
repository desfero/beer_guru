import React from "react";
import { injectGlobal } from "styled-components";

injectGlobal`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

const withStyleNormalize = () => Wrapper => props => (
  <React.Fragment>
    <Wrapper {...props} />
  </React.Fragment>
);

export { withStyleNormalize };
