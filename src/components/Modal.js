import ReactModal from 'react-modal';
import styled, {injectGlobal} from 'styled-components';
import {containerStyles} from './Container';

const overlayClassName = 'modal-overlay';

injectGlobal`
  .${overlayClassName} {
    background-color: rgba(255, 255, 255, 0.75);
    bottom: 0px;
    left: 0px;
    position: fixed;
    right: 0px;
    top: 0px;
  }
`;

const Modal = styled(ReactModal).attrs({
    overlayClassName,
})`
    ${containerStyles}

    background: rgb(255, 255, 255);
    border-radius: 4px;
    border: 1px solid rgb(204, 204, 204);
    left: 40px;
    max-height: 90vh;
    outline: none;
    overflow: auto;
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
`;

export {Modal};
