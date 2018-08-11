import styled from 'styled-components';
import {media} from '../theme/sizes';

const CardGroup = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    
   
    ${
        media.tablet`
            grid-template-columns: 1fr 1fr;    
       `
    }
    
    ${
        media.phone`
            grid-template-columns: 1fr;    
        `
    }  
`;

export {CardGroup};
