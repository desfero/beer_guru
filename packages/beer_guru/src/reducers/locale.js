import { handleActions } from "redux-actions";
import { compose, lensProp, set, view } from "ramda";
import { setLanguage } from "../actions/locale";
import { LANGUAGE } from "../intl";

const languageLens = lensProp("language");

const defaultState = compose(set(languageLens, LANGUAGE.EN))({});

const localeReducer = handleActions(
  {
    [setLanguage]: (state, { payload }) => {
      return set(languageLens, payload.language, state);
    },
  },
  defaultState,
);

const localeReducerLens = lensProp("locale");
const languageSelector = view(
  compose(
    localeReducerLens,
    languageLens,
  ),
);

export { localeReducer, localeReducerLens, languageSelector };
