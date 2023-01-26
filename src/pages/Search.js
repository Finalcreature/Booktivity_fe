import { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SearchResult from "../components/SearchResults";
import Accordion from "react-bootstrap/Accordion";
import { Spinner } from "react-bootstrap";

function Search() {
  const { handleSearch, result, updateInputs, inputs } = useContext(BookContext);

  return (
    <div className="search-page-container">
      <h1 className="search-title">Search result</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Advanced search</Accordion.Header>
          <Accordion.Body>
            <Form className="advanced-search-form" onSubmit={handleSearch}>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type=""
                  className="me-2 search-field"
                  name="title"
                  onChange={updateInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput2">
                <Form.Label>Author</Form.Label>
                <Form.Control type="" name="author" onChange={updateInputs} />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput3">
                <Form.Label>Year of release</Form.Label>
                <Form.Control
                  type=""
                  name="publisher"
                  onChange={updateInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput4">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type=""
                  placeholder="1 to 5"
                  name="rating"
                  onChange={updateInputs}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 search-input"
                controlId="exampleForm.ControlInput5">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type=""
                  placeholder=""
                  name="isbn"
                  onChange={updateInputs}
                />
              </Form.Group>
              <Button type="submit" className="advanced-search-btn">
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* {result.length === 0 && inputs !== undefined ? (
        <Spinner className="ms-5 ms-5 ms-5 mt-5 mt-5" animation="border" />
      ) : null} */}
      <SearchResult search={result} />
    </div>
  );
}

export default Search;
