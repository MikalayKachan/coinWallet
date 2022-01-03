import React from 'react';
import ReactModal from 'react-modal'; //почитать
import styles from './Modal.module.scss';
import cn from 'classnames'

const Modal = ({
    open,
    children,
    onClose,
    closeTimeoutMS,
    className
}) => (
    <ReactModal
        portalClassName={styles.portal}
        overlayClassName={styles.overlay}

        className={cn(styles.modal, className)}
        isOpen={open}
        closeTimeoutMS={closeTimeoutMS}
        onRequestClose={onClose}
    >
       
            <div className={styles.iconWrapper} onClick={onClose}>
            <button type="button" class="btn-close" disabled aria-label="Close"/>
            </div>
       
        {children}
    </ReactModal>
);

Modal.defaultProps = {
    open: false,
    withCloseIcon: true,
    centered: false,
    closeTimeoutMS: 300,
    variant: 'default',
};

export default React.memo(Modal);