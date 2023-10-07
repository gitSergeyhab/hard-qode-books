import { useEffect, useState } from "react";
import { useFetchData } from "./use-fetch-data";
import { getBooks, getUsers, getReviews } from "../lib/api";
import { Book, User, Review, BookInformation } from "../lib/types";
import { getInfo } from "../utils";

export const useFetchFullData = () => {
  const [data, setData] = useState<BookInformation[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { data: users, isLoading: isUsersLoading } = useFetchData<User>(
    getUsers
  );
  const { data: books, isLoading: isBooksLoading } = useFetchData<Book>(
    getBooks
  );
  const { data: reviews } = useFetchData<Review>(getReviews);

  useEffect(() => {
    setData(getInfo({ users, books, reviews }));
  }, [users, books, reviews]);

  useEffect(() => {
    // ждать пока не загрузится основной контент: книги и авторы
    // reviews моожно догрузить позже
    setLoading(isUsersLoading || isBooksLoading);
  }, [isBooksLoading, isUsersLoading]);

  return { data, isLoading };
};
