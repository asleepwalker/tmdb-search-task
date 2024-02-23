import { FC } from 'react';

import styles from './Error.module.css';

export const Error: FC = () => <div className={styles.container}>Failed to fetch data</div>;

export default Error;
