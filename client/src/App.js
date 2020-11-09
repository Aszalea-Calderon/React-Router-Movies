import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import Movie from "./Movies/Movie.js";
import MovieList from "./Movies/MovieList.js";
import SavedList from "./Movies/SavedList";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // setMovieList(response)
          console.log(response);
          // const data = response.data; //This might not be needed

          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />
      {/* What does switch really do? */}
      <Switch>
        <Route path="movies:id">
          <Movie />
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
        {/* <Route path="/movies:id" /> Not sure if this part is correct */}
      </Switch>
    </div>
  );
}
