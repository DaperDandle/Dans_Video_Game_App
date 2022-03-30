import React from "react";
import SingleGame from "./singleGame";
import { useGlobalContext } from "../Context";

const GamesList = () => {
  const { games, loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <section className="d-flex flex-wrap justify-content-between container-md">
        {games.map((game) => {
          const { id, background_image, name } = game;
          return <SingleGame key={id} image={background_image} name={name} />;
        })}
      </section>
    );
  }
};

export default GamesList;
