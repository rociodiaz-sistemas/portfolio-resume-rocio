import React from "react";
import FlipPage from "react-flip-page";

const Book: React.FC = () => {
  return (
    <div>
      <h1>My Flippable Book</h1>
      <FlipPage
        orientation="horizontal" // Optional: controls horizontal or vertical flipping
        width={500} // Optional: set width
        height={700} // Optional: set height
        uncutPages // Optional: if you want "double page" mode
      >
        <article>
          <h2>Cover Page</h2>
        </article>
        <article>
          <h2>Page 1</h2>
          <p>This is the first page of the book.</p>
        </article>
        <article>
          <h2>Page 2</h2>
          <p>This is the second page of the book.</p>
        </article>
        <article>
          <h2>Page 3</h2>
          <p>This is the third page of the book.</p>
        </article>
        <article>
          <h2>End Page</h2>
        </article>
      </FlipPage>
    </div>
  );
};
export default Book;
