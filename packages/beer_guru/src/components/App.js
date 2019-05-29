import { connect } from "react-redux";
import { branch, compose, lifecycle, renderComponent } from "recompose";
import { theme } from "@beer/layout";
import { store } from "../store/index";
import { CriticalUIError } from "./CriticalUIError";
import { logCriticalUIError } from "../actions";
import { criticalUIErrorSelector } from "../reducers";
import { withThemeProvider } from "../hocs/withThemeProvider";
import { withStoreProvider } from "../hocs/withStoreProvider";
import { AppLayout } from "./AppLayout";
import { withI18N } from "../hocs/withI18N";

const mapStateToProps = state => ({
  criticalUIError: criticalUIErrorSelector(state),
});

const mapDispatchToProps = { logCriticalUIError };

const App = compose(
  withStoreProvider(store),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidCatch(error, errorInfo) {
      this.props.logCriticalUIError({ error, extra: errorInfo });
    },
  }),
  branch(props => props.criticalUIError, renderComponent(CriticalUIError)),
  withThemeProvider(theme),
  withI18N(),
)(AppLayout);

export { App };
