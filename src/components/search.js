import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useGlobalContext } from "../Context";

const Search = () => {
  const [show, setShow] = useState(false);
  const {
    setSearchParameters,
    searchParameters,
    genres,
    platforms,
    searchGames,
  } = useGlobalContext();

  const changeParameters = (e) => {
    const { name, value } = e.target;
    setSearchParameters((prevParameters) => ({
      ...prevParameters,
      [name]: value,
    }));
    console.log(searchParameters);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchGames(searchParameters);
  };

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={changeParameters}
              name="searchTerm"
              value={searchParameters.searchTerm}
            />
            <div className="mt-2 d-flex justify-content-between ">
              <label htmlFor="genre" className="me-2">
                Genre:
              </label>
              <select
                className="btn btn-success dropdown-toggle"
                name="genre"
                value={searchParameters.genre}
                id="genre"
                onChange={changeParameters}
              >
                {genres.map((genre) => {
                  return (
                    <option
                      className="dropdown-item text-align-center"
                      value={genre.slug}
                      key={genre.id}
                    >
                      {genre.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-2 d-flex justify-content-between">
              <label htmlFor="platform" className="me-2">
                Platform:
              </label>
              <select
                className="btn btn-success dropdown-toggle"
                name="platform"
                value={searchParameters.platform}
                id="platform"
                onChange={changeParameters}
              >
                {platforms.map((platform) => {
                  return (
                    <option
                      className="dropdown-item text-align-center"
                      value={platform.id}
                      key={platform.id}
                    >
                      {platform.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-2 d-flex justify-content-between">
              <label htmlFor="pageSize" className="me-2">
                Results per Page:
              </label>
              <select
                name="pageSize"
                onChange={changeParameters}
                className="btn btn-success dropdown-toggle"
              >
                <option value="10" className="dropdown-item text-align-center">
                  10
                </option>
                <option value="20" className="dropdown-item text-align-center">
                  20
                </option>
                <option value="30" className="dropdown-item text-align-center">
                  30
                </option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Search;
