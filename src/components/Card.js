import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Card = styled.section`
    border: 1px solid rgb(180, 180, 180);
`;

const LinkCard = Card.withComponent(Link);

export {Card, LinkCard};
