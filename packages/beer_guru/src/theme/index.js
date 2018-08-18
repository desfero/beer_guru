import {injectGlobal} from 'styled-components';
import {cardType} from '../components/Card';

const theme = {
    fontColor: '#707070',
    bgColor: '#F8F8F8',
    containerWidth: '700px',
    modalWidth: '500px',
    card: {
        [cardType.default]: {
            background: '#FFF',
            headingColor: '#F5C34C',
            baseSize: '13px',
        },
        [cardType.lite]: {
            background: '#FFF',
            baseSize: '12px',
        }
    },
};

// Global styles
injectGlobal`
  body {
    background: ${theme.bgColor};
    color: ${theme.fontColor};
  }
`;

export {theme};
