import { useEffect, useState } from 'react';

import { apiBase, authToken } from './config';

const useApi = <T>(endpoint: string): [T | undefined, boolean, boolean] => {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!endpoint) return;

    setLoading(true);
    setError(false);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    fetch(`${apiBase}${endpoint}`, options)
      .then(response => response.ok ? response.json() : Promise.reject())
      .then((response: T) => setResponse(response))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return [response, loading, error];
};

export default useApi;
