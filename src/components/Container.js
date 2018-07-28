import styled, {css} from 'styled-components';

const containerStyles = css`
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
`;

const Container = styled.div`
   ${containerStyles}
`;

export {Container, containerStyles};
