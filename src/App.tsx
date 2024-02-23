import React, {FC, useCallback, useState} from 'react';

import Loadable from './components/Loadable/Loadable';
import SearchForm from './components/SearchForm/SearchForm';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Pagination from './components/Pagination/Pagination';
import useSearchApi from './api/useSearchApi';

import './App.css';

const App: FC = () => {
  const [response, loading, error, handleSearch, handlePaginate] = useSearchApi();
  const [activeId, setActiveId] = useState<number>();

  const handleClose = useCallback(() => {
    setActiveId(undefined);
  }, []);

  return (
    <div className="App">
      <SearchForm onSubmit={handleSearch} />

      <Loadable error={error} loading={loading}>
        {response && <MovieList items={response.results} onClick={setActiveId} />}
      </Loadable>

      {response && response.total_pages > 1 && (
        <Pagination current={response.page} total={response.total_pages} onChange={handlePaginate} />
      )}

      {activeId && <MovieDetails id={activeId} onClose={handleClose} />}
    </div>
  );
}

export default App;
