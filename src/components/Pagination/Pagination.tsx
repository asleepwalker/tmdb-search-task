import React, { FC, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

import { PaginationProps } from './Pagination.interface';

import styles from './Pagination.module.css';

const Pagination: FC<PaginationProps> = ({ current, total, onChange }) => {
  const handleChange = useCallback((page: ({ selected: number })) => {
    onChange(page.selected + 1);
  }, [onChange]);

  return (
    <ReactPaginate
      className={styles.container}
      breakLabel=".."
      previousLabel="«"
      nextLabel="»"
      onPageChange={handleChange}
      pageRangeDisplayed={5}
      initialPage={current - 1}
      pageCount={total}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
