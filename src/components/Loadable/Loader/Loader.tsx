import React from 'react';

import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.indicator} />
  </div>
);

export default Loader;
