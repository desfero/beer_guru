import styled from "styled-components";
import * as React from "react";

const FieldBase = styled.div``;

// TODO: #17 new styled-components use forwardRef under the hood so this may be no longer needed
const Field = React.forwardRef((props, ref) => (
  <FieldBase innerRef={ref} {...props} />
));

export { Field };
