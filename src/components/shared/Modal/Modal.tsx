import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.scss';
import cn from 'classnames';

type ModalParamsType = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  closeTimeoutMS: number;
  className: string;
};

const Modal = ({
  open,
  children,
  onClose,
  closeTimeoutMS,
  className,
}: ModalParamsType) => (
  <ReactModal
    portalClassName={styles.portal}
    overlayClassName={styles.overlay}
    className={cn(styles.modal, className)}
    isOpen={open}
    closeTimeoutMS={closeTimeoutMS}
    onRequestClose={onClose}
  >
    <div className={styles.iconWrapper} onClick={onClose}>
      <button type="button" className="btn-close" disabled aria-label="Close" />
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
