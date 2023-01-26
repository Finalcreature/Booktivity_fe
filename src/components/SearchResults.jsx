
import { Spinner } from "react-bootstrap";
import BookCard from "./BookCard";

function SearchResult({ search }) {

  // if (!search.length) return <Spinner className="ms-5 ms-5 ms-5 mt-5 mt-5" animation="border" />

  return (
    <div className="results-component">
      <div className="books-card-container">
        {search.map((book) => (
          <BookCard
            id={book._id}
            key={book._id}
            picture={book.image}
            title={book.title}
            author={book.author}
            year={book.year}
            rating={book.rating}
            isbn={book.isbn}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResult;