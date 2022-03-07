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
    <div>
      <button onClick={decreasePage}>{"<"}</button>
      <button onClick={increasePage}>{">"}</button>
    </div>
  );
};

export default PageControl;
