import {
  Book,
  User,
  Review,
  ReviewInformation,
  BookInformation
} from "./lib/types";

interface GetUser {
  users: User[];
  userId: string;
}
const getUser = ({ users, userId }: GetUser) =>
  users.find((item) => item.id === userId);

interface GetReview {
  users: User[];
  review: Review;
}
const getReview = ({ users, review }: GetReview): ReviewInformation => {
  const { id, userId, text } = review;
  const user = getUser({ users, userId });
  return { id, user, text };
};

interface GetReviews {
  users: User[];
  reviews: Review[];
  reviewIds: string[];
}
const getReviews = ({
  users,
  reviews,
  reviewIds
}: GetReviews): ReviewInformation[] =>
  reviews
    .filter((item) => reviewIds.includes(item.id))
    .map((review) => getReview({ review, users }));

interface GetBook {
  book: Book;
  users: User[];
  reviews: Review[];
}
const getBook = ({
  book,
  users,
  reviews: allRewiews
}: GetBook): BookInformation => {
  const { id, name, description, authorId, reviewIds } = book;
  const author = getUser({ users, userId: authorId });
  const reviews = getReviews({ users, reviews: allRewiews, reviewIds });
  return { id, name, description, author, reviews };
};

interface GetInfo {
  books: Book[];
  users: User[];
  reviews: Review[];
}
/**
 * формирует нужную для отрисовки структуру из приходящих данных
 */
export const getInfo = ({
  books,
  users,
  reviews
}: GetInfo): BookInformation[] =>
  books.map((book) => getBook({ book, users, reviews }));
