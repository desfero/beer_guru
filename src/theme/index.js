import {cardType} from '../components/Card';

const theme = {
    bgColor: '#F8F8F8',
    containerWidth: '700px',
    modalWidth: '500px',
    card: {
        [cardType.default]: {
            background: '#FFF',
            headingColor: '#F5C34C',
            paragraphColor: '#CECECE',
            baseSize: '13px',
        },
        [cardType.lite]: {
            background: '#FFF',
            headingColor: '#707070',
            baseSize: '12px',
        }
    },
};


export {theme};
