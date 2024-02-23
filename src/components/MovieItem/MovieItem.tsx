import React, { FC } from 'react';

import { previewBase } from '../../api/config';
import { MovieItemProps } from './MovieItem.interface';
import formatDate from '../../utils/formatDate';

import styles from './MovieItem.module.css';

const MovieItem: FC<MovieItemProps> = ({ data, onClick }) => (
  <div className={styles.container} onClick={onClick}>
    {data.poster_path && <img loading="lazy" className={styles.poster} src={`${previewBase}${data.poster_path}`} />}
    <div className={styles.body}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.release}>{formatDate(data.release_date)}</div>
      <div className={styles.description}>{data.overview}</div>
    </div>
  </div>
);

export default MovieItem;
