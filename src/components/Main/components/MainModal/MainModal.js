import React from 'react';
import Modal from '../../../shared/Modal/Modal';
import styles from './MainModal.module.css';


const MainModal = ({ open, onClose }) => (
    <Modal
        className={styles.mainStyle}
        open={open}
        onClose={onClose}
    >
        main modal
    </Modal>
);

export default React.memo(MainModal);
