import styled from 'styled-components';
import {nest} from 'recompose';

const Container = nest(
    styled.div`
        background: ${props => props.theme.bgColor};
        min-height: 100vh;
    `,
    styled.div`
        max-width: ${props => props.theme.containerWidth};
        margin: 0 auto;
        padding: 20px;
    `,
);

export {Container};
