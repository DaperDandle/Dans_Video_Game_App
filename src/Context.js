import React, { useContext, useState, useEffect, useCallback } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [searchParameters, setSearchParameters] = useState({
    searchTerm: "",
    genre: "",
    platform: "",
    developer: "",
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //
  const fetchGames = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchParameters.searchTerm}&search_precise&page=${page}&page_size=${pageSize}`
      );
      const data = await response.json();

      if (data) {
        setGames(data.results);
        setLoading(false);
      }

      // set array to empty if fetch fails and catch error in rendering game list
      else {
        setGames([]);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, [searchParameters, page, pageSize]);

  const fetchGenres = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      const data = await response.json();

      if (data) {
        setGenres(data.results);
        setLoading(false);
      }

      // set array to empty if fetch fails and catch error in rendering game list
      else {
        setGenres([]);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  const fetchPlatforms = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
      );
      const data = await response.json();

      if (data) {
        setPlatforms(data.results);
        setLoading(false);
      }

      // set array to empty if fetch fails and catch error in rendering game list
      else {
        setPlatforms([]);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  // fetch data when serach term changes
  useEffect(() => {
    fetchGames();
    fetchGenres();
    fetchPlatforms();
  }, [fetchGames]);
  return (
    <AppContext.Provider
      value={{
        loading,
        games,
        searchParameters,
        setSearchParameters,
        page,
        setPage,
        pageSize,
        setPageSize,
        genres,
        platforms,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to allow components to get the global context
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
