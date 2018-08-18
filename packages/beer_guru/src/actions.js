import {createAction} from 'redux-actions';

const logCriticalUIError = createAction('LOG_CRITICAL_UI_ERROR', ({ error }) => error, ({ extra }) => extra);

export {logCriticalUIError};
