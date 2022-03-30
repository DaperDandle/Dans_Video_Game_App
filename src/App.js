import React from "react";
import GamesList from "./components/gamesList";
import PageControl from "./components/pageControl";

function App() {
  return (
    <main className="container mx-auto">
      <GamesList />
      <PageControl />
    </main>
  );
}

export default App;
