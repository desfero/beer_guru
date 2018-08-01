import React from 'react';
import {ThemeProvider} from 'styled-components';

const withThemeProvider = theme => Wrapper => props => (
    <ThemeProvider theme={theme}>
        <Wrapper {...props} />
    </ThemeProvider>
);

export {withThemeProvider};
