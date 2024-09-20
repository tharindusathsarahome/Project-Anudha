import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const PreviewModal = ({ title, content, open, onClose }) => (
    <Modal open={open} onClose={onClose}>
        <Modal.Header>Preview Your Post</Modal.Header>
        <Modal.Content>
            <h3>{title}</h3>
            <p>{content}</p>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={onClose}>Close</Button>
        </Modal.Actions>
    </Modal>
);

export default PreviewModal;
