import { compose, map } from "ramda";
import { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const maxWidthMediaQuery = size => `(max-width: ${size}px)`;

const media = compose(
  map(mediaQuery => (...args) =>
    css`
      @media ${mediaQuery} {
        ${css(...args)}
      }
    `,
  ),
  map(maxWidthMediaQuery),
)(sizes);

const isPhone = () =>
  compose(
    matchMedia,
    maxWidthMediaQuery,
  )(sizes.phone);

export { media, isPhone };
