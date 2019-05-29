import { createActions } from "redux-actions";

const { setLanguage } = createActions({
  SET_LANGUAGE: language => ({ language }),
});

export { setLanguage };
