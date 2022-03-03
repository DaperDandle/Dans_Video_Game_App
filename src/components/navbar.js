import React, { useRef } from "react";
import { useGlobalContext } from "../Context";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef("");

  const searchGames = () => {
    setSearchTerm(searchRef.current.value);
  };
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <form className="d-flex">
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
