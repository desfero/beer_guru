import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {omitProps} from '../hocs/omitProps';

const cardType = {
    lite: Symbol('lite'),
    default: Symbol('default'),
};

const cardDefaultProps = {
    type: cardType.default,
};

const omitCardStyleProps = omitProps(['type', 'theme']);

const Card = styled(omitCardStyleProps(props => <section {...props} />)).attrs({
    theme: props => props.theme.card[props.type],
})`
    background: ${props => props.theme.background};
    border-radius: 3px;
    text-align: center;
    padding: 1.2em 1em 1em;
    text-decoration: none;
    color: initial;
    overflow: hidden;
    font-size: ${props => props.theme.baseSize};
    
    
    ${
        props => props.type === cardType.default && 
        `
            box-shadow: 0 0 2px 0 rgba(244,244,244,1); 
            
            &:focus, &:hover {
                outline: none;
                transform: scale(1.05, 1.05);
                box-shadow: 0px 0px 10px 1px rgba(229,229,229,1);
            }
        `
    }
    
    ${
        props => props.type === cardType.lite &&
        `
            border: 1px solid #F2F2F2;
            
            &:focus, &:hover {
                outline: 1px solid black;
            }
        `
    }
    
    & :last-child {
        margin-bottom: 0;
    }
    
    & > h2 {
        color: ${props => props.theme.headingColor}
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 1.2em;
        margin-bottom: 0.3em;
    }    
    
    & > p {
        color: ${props => props.theme.paragraphColor};
        margin-top: 0.4em;
    }
`;

Card.defaultProps = cardDefaultProps;

const LinkCard = Card.withComponent(omitCardStyleProps(Link));

export {Card, LinkCard, cardType};
