import { Book, Review, User } from "./types";
import { books, reviews, users } from "./mocks";

const getAsync = <T>(value: T[], time: number): Promise<T[]> => {
  return new Promise((res) => {
    setTimeout(() => res(value), Math.random() * time);
  });
};

export const getBooks = (): Promise<Book[]> => getAsync(books, 1000);
export const getUsers = (): Promise<User[]> => getAsync(users, 2000);
export const getReviews = (): Promise<Review[]> => getAsync(reviews, 6000);
