import React, { FC } from 'react';

import { DialogProps } from './Dialog.interface';

import styles from './Dialog.module.css';

const Dialog: FC<DialogProps> = ({ onClose, children }) => (
  <>
    <div className={styles.overlay} onClick={onClose} />
    <div className={styles.container}>
      <button className={styles.close} onClick={onClose}>&times;</button>
      {children}
    </div>
  </>
);

export default Dialog;
