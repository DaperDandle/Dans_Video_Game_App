import React, { useState } from "react";
import { Offcanvas, Button, Dropdown } from "react-bootstrap";
import { useGlobalContext } from "../Context";

const Search = () => {
  const [show, setShow] = useState(false);
  const { setSearchParameters, searchParameters, genres, platforms } =
    useGlobalContext();

  const searchGames = (e) => {
    const { name, value } = e.target;
    setSearchParameters((prevParameters) => ({
      ...prevParameters,
      [name]: value,
    }));
    console.log(searchParameters);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Games Database</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchGames}
              name="searchTerm"
              value={searchParameters.searchTerm}
            />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {genres.map((genre) => {
                  return <Dropdown.Item>{genre.name}</Dropdown.Item>;
                })}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Platforms
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {platforms.map((platform) => {
                  return <Dropdown.Item>{platform.name}</Dropdown.Item>;
                })}
              </Dropdown.Menu>
            </Dropdown>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Search;
