import React, { FC, useCallback, useEffect, useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

import { SearchFormProps } from './SearchForm.interface';

import styles from './SearchForm.module.css';

const SearchForm: FC<SearchFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    onSubmit(value);
  }, [onSubmit, value]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.key === 'Enter') {
      inputRef.current?.blur();
      handleSubmit();
    }
  }, [handleSubmit]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search movies by title..."
        type="search"
        ref={inputRef}
      />

      <button className={styles.submit} disabled={!value} onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchForm;
