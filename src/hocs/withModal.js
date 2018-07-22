import React from 'react';
import Modal from 'react-modal';

const withModal = getModalProps => Wrapper => props => {
    const modalProps = getModalProps(props);

    return (
        <Modal isOpen {...modalProps}>
            <Wrapper {...props} />
        </Modal>
    );
};

export { withModal };
