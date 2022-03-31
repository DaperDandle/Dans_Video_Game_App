import React, { useRef } from "react";
import { useGlobalContext } from "../Context";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const { setSearchParameters, searchParameters, setPageSize } =
    useGlobalContext();
  const searchRef = useRef("");
  const pageRef = useRef("");

  const searchGames = () => {
    setSearchParameters((prevParameters) => ({
      ...prevParameters,
      searchTerm: searchRef.current.value,
    }));
    console.log(searchParameters);
  };

  const changePageSize = () => {
    setPageSize(pageRef.current.value);
  };
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <form className="d-flex">
          <label htmlFor="page_size" className="text-white">
            Results per Page:{" "}
          </label>
          <select name="page_size" ref={pageRef} onChange={changePageSize}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={searchRef}
            onChange={searchGames}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
