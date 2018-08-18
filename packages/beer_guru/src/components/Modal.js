import ReactModal from 'react-modal';
import styled, {injectGlobal} from 'styled-components';

const overlayClassName = 'modal-overlay';

injectGlobal`
  .${overlayClassName} {
    background-color: rgba(0, 0, 0, 0.7);
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
    background: rgb(255, 255, 255);
    border-radius: 4px;
    border: 1px solid rgb(204, 204, 204);
    left: 40px;
    margin: 0 auto;
    max-height: 90vh;
    max-width: ${props => props.theme.modalWidth};
    outline: none;
    overflow: auto;
    padding: 20px;
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
`;

export {Modal};
