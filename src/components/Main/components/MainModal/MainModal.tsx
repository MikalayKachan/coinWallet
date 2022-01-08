import React from 'react';

import Modal from '../../../shared/Modal/Modal';
import Button from '../../../shared/Button/Button';

import styles from './MainModal.module.css';

type MainModalPropsType = {
  open: boolean | ((modalData: string | null) => void) | null;
  value: string;
  onClose: () => void;
  name: string;
  onInputChange: (inputValue: number) => void;
  onConfirmClick: () => void;
};
const MainModal = ({
  open,
  value,
  onClose,
  name,
  onInputChange,
  onConfirmClick,
}: MainModalPropsType) => (
  <Modal className={styles.mainStyle} open={open} onClose={onClose}>
    <div className={styles.addButton}>
      <div className={styles.converter}>
        <div className={styles.inputPart}>
          <div className={styles.name}>{name}</div>
          <input
            onChange={(event) => onInputChange(Number(event.target.value))}
            className={styles.input}
            placeholder="0"
            type="number"
          />
        </div>
        <div className={styles.symbol}>=</div>
        <div className={styles.inputPart}>
          <div>USD</div>
          <div className={styles.result}>{value}</div>
        </div>
      </div>

      <div>
        <Button onClick={onConfirmClick} />
      </div>
    </div>
  </Modal>
);

export default React.memo(MainModal);
