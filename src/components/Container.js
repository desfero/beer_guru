import styled, {css} from 'styled-components';
import {nest} from 'recompose';

const containerStyles = css`
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
`;

const Container = nest(
    styled.div`
        background: ${props => props.theme.bgColor};
        min-height: 100vh;
    `,
    styled.div`
        ${containerStyles}
    `
);


export {Container, containerStyles};
