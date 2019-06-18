import { compose, omit } from "ramda";
import { mapProps } from "recompose";

const omitProps = compose(
  mapProps,
  omit,
);

export { omitProps };
