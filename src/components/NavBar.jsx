import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import lupa from "../images/lupa.png";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { updateInputs, handleSearch } = useContext(BookContext);
  const [defaultValue, setDefaultValue] = useState("");

  const navigate = useNavigate();

  const [logOut, setLogOut] = useState(false);

  const isLoggedin = currentUser.userId !== 0;

  const handleLogOut = () => {
    setLogOut(true);
    setCurrentUser("");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const handleSubmitSearch = async (e) => {
    await handleSearch(e);
    navigate("/search");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="nav-bar-container">
          <Navbar.Brand href="#home">Booktivity</Navbar.Brand>
          <Form className="input-search-container" onSubmit={handleSearch}>
            <div className="search-container">
              <Form.Control
                type="search"
                name="title"
                placeholder="Search by title"
                className="me-2 search-field"
                aria-label="Search"
                defaultValue={defaultValue}
                onChange={updateInputs}
              />
              <Button
                type="submit"
                className="search-btn"
                style={{ height: "37px", width: "60px" }}>
                <img
                  className="search-picture"
                  src={lupa}
                  style={{ height: "20px", color: "white" }}></img>
              </Button>
            </div>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-bar-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-bar-link" href="/myBooks">
                My books
              </Nav.Link>
              <Nav.Link className="nav-bar-link" href="/leaderboard">
                Leaderboard
              </Nav.Link>
              <Nav.Link className="nav-bar-link" href="/search">
                Advanced search
              </Nav.Link>

              {isLoggedin && (
                <Nav.Link
                  className="nav-bar-link"
                  href=""
                  onClick={handleLogOut}>
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
