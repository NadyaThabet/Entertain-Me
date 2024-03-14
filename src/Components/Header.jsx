import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "../Style/header.css";
import { getSearchResults } from "../Redux/Slices/SearchSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getSearchResults(query));
  }, [dispatch, query]);

  const handleform = (e) => {
    e.preventDefault();
  };

  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === "/" ? "Home" : path.slice(1));
  }, [location.pathname]);

  return (
    <div>
      <Navbar className="nav-bg mt-auto py-3" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-3" as={Link} to="/">
            <span className="text-warning">ENTERTAIN</span> <span>| </span>
            <span className="text-warning">ME</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/"
                className={`fw-bold ${activeLink === "Home" && "active"}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/movies"
                className={`fw-bold ${activeLink === "movies" && "active"}`}
              >
                Movies
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/series"
                className={`fw-bold ${activeLink === "series" && "active"}`}
              >
                Series
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleform}>
              <div className="me-4">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Link to="/searchresult">
                <Button
                  variant="outline-success"
                  onClick={() => dispatch(getSearchResults(query))}
                >
                  Search
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline-warning" className="ms-3">
                  Login
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
