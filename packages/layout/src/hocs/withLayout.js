import { compose } from "recompose";
import { withStyleNormalize } from "./withStyleNormalize";
import { withThemeProvider } from "./withThemeProvider";

const withLayout = () =>
  compose(
    withThemeProvider(),
    withStyleNormalize(),
  );

export { withLayout };
