import { useEffect, useState } from 'react';

export function useFetch(fetchFn,initial) {
    const [isFetching, setIsFetching] = useState();
    const [error,setError] = useState();
    const [fetchData, setFetchData] = useState(initial);

    useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchData,
    setFetchData,
    error
  }
}