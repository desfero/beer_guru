import React from 'react';
import {Modal} from '../components/Modal';

const withModal = getModalProps => Wrapper => props => {
    const modalProps = getModalProps(props);

    return (
        <Modal isOpen {...modalProps}>
            <Wrapper {...props} />
        </Modal>
    );
};

export { withModal };
