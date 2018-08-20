import styledComponents from "styled-components";
import React from "react";
import {is, omit} from "ramda";

const styled = new Proxy(styledComponents, {
  get(target, name) {
    return (...args) => is(Object, args[0]) ? target(props => React.createElement(name, omit(args[0].omitProps, props))) : target[name];
  }
});

export { styled };
