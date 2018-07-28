import {css} from 'styled-components';
import {map} from 'ramda';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
};

const media = map(
    size => (...args) => css`@media (max-width: ${size}px) { ${css(...args)} }`,
    sizes
);

export {sizes, media};
