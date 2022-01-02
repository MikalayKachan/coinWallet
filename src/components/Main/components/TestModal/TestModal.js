import React from 'react';
import Modal from '../../../shared/Modal/Modal';
import styles from './TestModal.module.scss';


const TestModal = ({
    open,
    onClose,
}) => (
    <Modal
        className={styles.testStyle}
        open={open}
        onClose={onClose}
    >
        test
    </Modal>
);

export default React.memo(TestModal);
