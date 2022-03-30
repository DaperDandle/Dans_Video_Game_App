import React from "react";
import { useGlobalContext } from "../Context";

const PageControl = () => {
  const { page, setPage } = useGlobalContext();

  const decreasePage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    } else {
      setPage(1);
    }
  };
  const increasePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="d-flex w-75 mx-auto justify-content-between">
      <button onClick={decreasePage} className="btn btn-primary">
        {"< Prev Page"}
      </button>
      <button onClick={increasePage} className="btn btn-primary">
        {"Next Page >"}
      </button>
    </div>
  );
};

export default PageControl;
