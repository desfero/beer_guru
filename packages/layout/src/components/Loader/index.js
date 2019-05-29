import React from 'react';
import { keyframes } from 'styled-components';
import { defaultProps, compose, withProps } from 'recompose';
import { always, cond, equals, prop } from 'ramda';
import { styled } from '../../helpers/styled';

const LOADER_SIZE = {
    small: Symbol('small'),
    big: Symbol('big')
};

const getFontSize = cond([
    [equals(LOADER_SIZE.small), always('8px')],
    [equals(LOADER_SIZE.big), always('18px')],
]);

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div({ omitProps: ['size'] })`
  margin: 5em auto;
  font-size: ${compose(getFontSize, prop('size'))};
  text-indent: -9999px;
  overflow: hidden;
  border-top: 0.4em solid ${props => props.theme.loader.background};
  border-right: 0.4em solid ${props => props.theme.loader.background};
  border-bottom: 0.4em solid ${props => props.theme.loader.background};
  border-left: 0.4em solid ${props => props.theme.loader.indicator};
  animation: ${rotate360} 0.6s infinite linear;
  border-radius: 50%;
  width: 3em;
  height: 3em;
`;

const LoaderLayout = ({ size }) => <Spinner size={size}>Loading...</Spinner>;

const Loader = compose(
    defaultProps({
        size: LOADER_SIZE.small,
    }),
)(LoaderLayout);

const BigLoader = withProps({ size: LOADER_SIZE.big })(Loader);

export { Loader, BigLoader, LOADER_SIZE };
