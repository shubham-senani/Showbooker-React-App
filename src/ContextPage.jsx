import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contextpage = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    const data = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
    const res = await data.json();
    setMovies(res);
    setLoader(false);
  };

  return (
    <Contextpage.Provider
      value={{
        fetchMovies,
        setMovies,
        movies,
        loader,
        setLoader,
      }}
    >
      {children}
    </Contextpage.Provider>
  );
}

export default Contextpage;
