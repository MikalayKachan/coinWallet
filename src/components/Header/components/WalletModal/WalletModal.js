import React from 'react';
import Modal from '../../../shared/Modal/Modal';
import styles from './WalletModal.module.css';


const WalletModal = ({ open, onClose }) => (
    <Modal
        className={styles.testStyle}
        open={open}
        onClose={onClose}
    >
        wallet modal
    </Modal>
);

export default React.memo(WalletModal);
