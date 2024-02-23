import { useCallback, useState } from 'react';

import { IMovieList } from '../models/movieList';
import useApi from "./useApi";

const useSearchApi = (): [IMovieList | undefined, boolean, boolean, (query: string) => void, (page: number) => void] => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [response, loading, error] =
    useApi<IMovieList>(query ? `/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=en-US` : '');

  const handleSearch = useCallback((value: string) => {
    if (query !== value) {
      setQuery(value);
      setPage(1);
    }
  }, [query]);

  return [response, loading, error, handleSearch, setPage];
};

export default useSearchApi;
