import React, { useContext, useState, useEffect } from "react";

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
    page: 1,
    pageSize: 30,
  });

  const fetchInitialState = async () => {
    setLoading(true);

    //fetch games
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=30`
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

    // fetch genres
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

    // fetch platforms
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

  const searchGames = async (searchParameters) => {
    setLoading(true);
    console.log(searchParameters);
    const { searchTerm, platform, genre, page, pageSize } = searchParameters;
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}${
          searchTerm ? `&search=${searchTerm}` : ""
        }${genre ? `&genres=${genre}` : ""}${
          platform ? `&parent_platforms=${platform}` : ""
        }&page=${page}&page_size=${pageSize}`
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
  };

  useEffect(() => {
    fetchInitialState();
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        games,
        setGames,
        searchParameters,
        setSearchParameters,
        searchGames,
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
