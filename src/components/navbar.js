import React, { useRef } from "react";
import { useGlobalContext } from "../Context";
import Logo from "../assets/images/logo.png";
import Search from "./search";

const Navbar = () => {
  const { setPageSize } = useGlobalContext();
  const pageRef = useRef("");

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
          <Search />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
