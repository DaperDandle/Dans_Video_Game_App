import React from "react";
import { useGlobalContext } from "../Context";

const PageControl = () => {
  const { searchParameters, setSearchParameters, searchGames } =
    useGlobalContext();

  const decreasePage = () => {
    if (searchParameters.page > 1) {
      setSearchParameters((prevParameters) => ({
        ...prevParameters,
        page: prevParameters.page - 1,
      }));
      searchGames(searchParameters);
    }
  };
  const increasePage = () => {
    setSearchParameters((prevParameters) => ({
      ...prevParameters,
      page: prevParameters.page + 1,
    }));
    searchGames(searchParameters);
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
