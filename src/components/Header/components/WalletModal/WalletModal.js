import React from 'react';

import Modal from '../../../shared/Modal/Modal';

import styles from './WalletModal.module.css';


const WalletModal = ({ open, walletData, onClose, onDeleteClick }) => {

        const coinsToRender = walletData && walletData.map((coin, index) =>  (
            <div key={coin.walletId} className={styles.coinPart}>
                <div>{index + 1}</div>
                <div>{coin.name}</div>
                <div>{coin.symbol}</div>
                <div>{coin.value}</div>
                <div>{(coin.usdCurrentValue).toFixed(2)}</div>
                <button  onClick={()=>onDeleteClick(coin.walletId)}  className={styles.basketButton}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Linearicons_trash.svg/1024px-Linearicons_trash.svg.png"} className={styles.basket} />
                </button>
            </div>
            ))


    return (

        <Modal
            className={styles.testStyle}
            open={open}
            onClose={onClose}
        >
            <div className={styles.coinPart}>
                <div>number</div>
                <div>name</div>
                <div>symbol</div>
                <div>volume</div>
                <div>USD</div>
            </div>
            {coinsToRender}
        </Modal>
    )
};

export default React.memo(WalletModal);