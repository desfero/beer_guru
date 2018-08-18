import styled from 'styled-components';

const Container = styled.div`
    max-width: ${props => props.theme.containerWidth};
    margin: 0 auto;
    padding: 20px;
`;

export {Container};
