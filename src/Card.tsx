import { FC } from "react";
import Review from "./Review";
import { BookInformation } from "./lib/types";

const Card: FC<{ book: BookInformation }> = ({ book }) => {
  const { name, description, author, reviews } = book;
  const reviewElements = reviews.length
    ? reviews.map((r) => <Review key={r.id} review={r} />)
    : "-";

  return (
    <div>
      <h3>{name}</h3>
      <p>
        <b>Автор</b>: {author?.name}
      </p>
      <p>
        <b>Описание</b>: {description}
      </p>
      <div>
        <b>Отзывы: </b>
        <br />
        {reviewElements}
      </div>
    </div>
  );
};

export default Card;
