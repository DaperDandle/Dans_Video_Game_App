import React, { useContext, useState, useEffect } from "react";

const API_KEY = "8bac5e5b4d76433f80f45beb66056b4e";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  //
  const fetchGames = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rawg-video-games-database.p.rapidapi.com/games?key=${API_KEY}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":
              "ae19b16530msh43c1d970ac31ed9p14bacbjsn9ff950cdd289",
          },
        }
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
  };

  // fetch data when serach term changes
  useEffect(() => {
    fetchGames();
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        games,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to allow components to get the global context
export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
