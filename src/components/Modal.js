import ReactModal from 'react-modal';
import styled, {injectGlobal} from 'styled-components';
import {containerStyles} from './Container';

const overlayClassName = 'modal-overlay';

injectGlobal`
  .${overlayClassName} {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const Modal = styled(ReactModal).attrs({
    overlayClassName,
})`
    ${containerStyles}

    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 4px;
    outline: none;
`;

export {Modal};
