import React from "react";
import GamesList from "./components/gamesList";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="container mx-auto">
      <Navbar />
      <GamesList />
    </main>
  );
}

export default App;
