import React from 'react';
import { compose } from 'recompose';
import { IntlProvider } from 'react-intl';
import {connect} from "react-redux";

import { languageSelector } from "../reducers/locale";
import {locales} from "../intl";

const withI18NProvider = Wrapper => ({ locale, ...rest }) => (
    <IntlProvider locale={locale} textComponent={React.Fragment} messages={locales[locale]}>
        <Wrapper {...rest} />
    </IntlProvider>
);

const withI18N = () => compose(
    connect(state => ({
        locale: languageSelector(state),
    })),
    withI18NProvider,
);

export {withI18N};
