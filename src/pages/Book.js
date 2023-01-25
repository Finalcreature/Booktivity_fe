import React from "react";
import Button from "react-bootstrap/Button";

function Book() {
  return (
    <div className="container mt-3">
      <div className="book-header">
        <h1>Book Title</h1>
        <h2>Author</h2>
        <h3>Year</h3>
        <h3>Rating</h3>
      </div>
      <div className="book-image"></div>
      <div className="book-summary mt-5 container">
        <p>
          In this ground-breaking book, Clears reveals exactly how these
          minuscule changes can grow into such life-altering outcomes. He
          uncovers a handful of simple life hacks (the forgotten art of Habit
          Stacking, the unexpected power of the Two Minute Rule, or the trick to
          entering the Goldilocks Zone), and delves into cutting-edge psychology
          and neuroscience to explain why they matter. Along the way, he tells
          inspiring stories of Olympic gold medalists, leading CEOs, and
          distinguished scientists who have used the science of tiny habits to
          stay productive, motivated, and happy.
        </p>
      </div>
      <div className="book-buttons">
       <Button className="me-1">Reading</Button>
       <Button className="me-1">Finished</Button>
       <Button className="me-1">Watchlist</Button>
       <Button>Buy</Button>
      </div>
    </div>
  );
}

export default Book;
