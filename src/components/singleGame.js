import React from "react";

const SingleGame = ({ name, image }) => {
  return (
    <article className="card m-2 single-game p-2 bg-dark text-secondary">
      <h3 className="text-wrap text-center">{name}</h3>
      <section className="mx-auto">
        <img src={image} alt={name} width="300px" />
      </section>
    </article>
  );
};

export default SingleGame;
