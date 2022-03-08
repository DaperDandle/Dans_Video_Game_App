import React, { useContext, useState, useEffect, useCallback } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //
  const fetchGames = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}&search_precise&page=${page}&page_size=${pageSize}`
      );
      const data = await response.json();

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
  }, [searchTerm, page, pageSize]);

  // fetch data when serach term changes
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);
  return (
    <AppContext.Provider
      value={{
        loading,
        games,
        searchTerm,
        setSearchTerm,
        page,
        setPage,
        pageSize,
        setPageSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to allow components to get the global context
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
