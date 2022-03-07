import React from "react";
import GamesList from "./components/gamesList";
import Navbar from "./components/navbar";
import PageControl from "./components/pageControl";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <GamesList />
      <PageControl />
    </main>
  );
}

export default App;
