import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function NavBar() {
  const { currentUser } = useContext(UserContext);
  const { setSearch, search } = useContext(BookContext);

  const navigate = useNavigate();

  const [logOut, setLogOut] = useState(false);

  const isLoggedin = currentUser.userId !== 0;

  const handleLogOut = () => {
    setLogOut(true);
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const handleOnChangeSearchTerms = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    navigate("/search");
    setSearch("");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Booktivity</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-bar-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-bar-link" href="#link">
                My books
              </Nav.Link>
              <Nav.Link className="nav-bar-link" href="#link">
                Leaderboard
              </Nav.Link>

              <Form className="search-container" onSubmit={handleSubmitSearch}>
                <Form.Control
                  type="search"
                  placeholder="Search by title"
                  className="me-2 search-field"
                  aria-label="Search"
                  onChange={handleOnChangeSearchTerms}
                  value={search}
                />
              </Form>

              {isLoggedin && (
                <Nav.Link
                  className="nav-bar-link"
                  href=""
                  onClick={handleLogOut}
                >
                  Log out
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
