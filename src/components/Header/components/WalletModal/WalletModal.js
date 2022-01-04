import React from 'react';
import Modal from '../../../shared/Modal/Modal';
import styles from './WalletModal.module.css';


const WalletModal = ({ open, onClose }) => (
    <Modal
        className={styles.testStyle}
        open={open}
        onClose={onClose}
    >
        <div className={styles.coinPart}>
            <div>rank</div>
            <div>name</div>
            <div>symbol</div>
            <div>volume</div>
            <div>USD</div>
            <button className={styles.basketButton}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Linearicons_trash.svg/1024px-Linearicons_trash.svg.png"} className={styles.basket} />
            </button>
        </div>
    </Modal>
);

export default React.memo(WalletModal);