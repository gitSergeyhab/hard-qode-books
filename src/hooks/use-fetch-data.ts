import { useEffect, useState } from "react";

export const useFetchData = <T>(getData: () => Promise<T[]>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const fetchedData = await getData();
      setData(fetchedData);
      setIsLoading(false);
    };
    fetchBooks();
  }, [getData]);

  return { data, isLoading };
};
