import { FC } from "react";
import { ReviewInformation } from "./lib/types";

const Review: FC<{ review: ReviewInformation }> = ({ review }) => {
  const { user, text } = review;
  const userName = user?.name ? `(${user.name})` : "";
  return (
    <p>
      {text} {userName}
    </p>
  );
};

export default Review;
