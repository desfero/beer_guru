import React from 'react';
import Modal from 'react-modal';

const withModal = () => Wrapper => props => (
    <Modal isOpen={true}>
        <Wrapper {...props} />
    </Modal>
);

export { withModal };
