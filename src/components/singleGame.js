import React from "react";

const SingleGame = ({ name, image }) => {
  return (
    <article className="card m-2 single-game p-2 bg-dark w-25 text-secondary game-container">
      <h3 className="text-wrap text-center text-light">{name}</h3>
      <section className="mx-auto game-img">
        <img src={image} alt={name} width="100%" />
      </section>
    </article>
  );
};

export default SingleGame;
