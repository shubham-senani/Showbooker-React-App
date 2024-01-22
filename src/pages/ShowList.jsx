import React, { useEffect, useContext } from "react";
import Contextpage from "../ContextPage";
import ShowCard from "../components/ShowCard";

const ShowList = () => {
  const { movies, fetchMovies } = useContext(Contextpage);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="">
        <div
          className="row d-flex justify-content-center"
          style={{ width: "99vw" }}
        >
          {movies.map((item) => (
            <ShowCard key={item.show.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
