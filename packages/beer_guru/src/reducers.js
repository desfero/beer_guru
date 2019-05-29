import { handleActions } from "redux-actions";
import { compose, lensProp, set, view } from "ramda";
import { logCriticalUIError } from "./actions";
import { reducers as sceneReducers } from "./scenes";
import { localeReducer } from "./reducers/locale";

const layoutReducerLens = lensProp("layout");
const criticalUIErrorLens = lensProp("criticalUIError");

const defaultState = compose(set(criticalUIErrorLens, null))({});

const layoutReducer = handleActions(
  {
    [logCriticalUIError]: (state, { payload, meta }) =>
      set(criticalUIErrorLens, { error: payload, extra: meta }, state),
  },
  defaultState,
);

const criticalUIErrorSelector = view(
  compose(
    layoutReducerLens,
    criticalUIErrorLens,
  ),
);

const reducers = {
  ...sceneReducers,
  layout: layoutReducer,
  locale: localeReducer,
};

export { criticalUIErrorSelector, reducers };
