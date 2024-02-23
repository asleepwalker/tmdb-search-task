import React, { FC } from 'react';

import MovieItem from '../MovieItem/MovieItem';
import NoData from './NoData/NoData';
import { MovieListProps } from './MovieList.interface';

import styles from './MovieList.module.css';

const MovieList: FC<MovieListProps> = ({ items, onClick }) => (
  <div className={styles.container}>
    {items.length
      ? items.map(item => <MovieItem key={item.id} data={item} onClick={() => onClick(item.id)} />)
      : <NoData />
    }
  </div>
);

export default MovieList;
