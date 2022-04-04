import React from "react";
import Logo from "../assets/images/logo.png";
import Search from "./search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <form className="d-flex">
          <Search />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
