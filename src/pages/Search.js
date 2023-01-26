import { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchResult from "../components/SearchResults";
import Accordion from "react-bootstrap/Accordion";

function Search() {
  const {
    search,
    handleSearch,
    result,
    setTitle,
    setAuthor,
    setYear,
    setRating,
    setIsbn,
    title,
    author,
    year,
    rating,
    isbn,
  } = useContext(BookContext);

  // useEffect(() => {
  //   getResults();
  // }, [search]);

  return (
    <div className="search-page-container">
      <h1 className="search-title">Search result</h1>

      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Advanced search</Accordion.Header>
          <Accordion.Body>
            <Form
              className="advanced-search-form"
              onSubmit={handleSearch}
            >
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type=""
                  placeholder=""
                  className="me-2 search-field"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type=""
                  placeholder=""
                  value={author}
                  onChange={(event) => {
                    setAuthor(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Year of release</Form.Label>
                <Form.Control
                  type=""
                  placeholder=""
                  value={year}
                  onChange={(event) => {
                    setYear(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type=""
                  placeholder="1 to 5"
                  value={rating}
                  onChange={(event) => {
                    setRating(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type=""
                  placeholder=""
                  value={isbn}
                  onChange={(event) => {
                    setIsbn(event.target.value);
                  }}
                />
              </Form.Group>
              <Button type="submit" className="advanced-search-btn">
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <SearchResult search={result} />
    </div>
  );
}

export default Search;
