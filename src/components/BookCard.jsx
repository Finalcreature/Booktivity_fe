import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BookCard ({ id, picture, title, author, year, rating, isbn }) {
  const navigate = useNavigate();


  return (
    <div className="book-card-container">
      <Card className="book-card" style={{ width: "14rem" }}>
        <Card.Img className="book-card-picture" variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="book-title">{title}</Card.Title>
          <p className="book-author">Author: {author}</p>
          <p className="book-author">Year of release: {year}</p>
          <p className="book-author">Rating: {rating}</p>
          <p className="book-author">ISBN: {isbn}</p>

            <Button
              onClick={() => navigate("/book")}
              variant="primary"
            >
              See more
            </Button>

        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;