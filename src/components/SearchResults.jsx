
import BookCard from "./BookCard";

function SearchResult({ search }) {
  return (
    <div className="results-component">
      <div className="books-card-container">
        {search.map((book) => (
          <BookCard
            id={book._id}
            key={book._id}
            picture={book.picture}
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