import React, { useContext, useState, useEffect, useCallback } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  //
  const fetchGames = useCallback(async () => {
    setLoading(true);
    console.log(API_KEY);
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`
      );
      const data = await response.json();
      console.log(data.results);
      if (data) {
        setGames(data.results);
        setLoading(false);
      }

      // set array to empty if fetch fails and catch error in rendering movie list
      else {
        setGames([]);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, [searchTerm]);

  // fetch data when serach term changes
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);
  return (
    <AppContext.Provider
      value={{
        loading,
        games,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to allow components to get the global context
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
