import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function MovieList(props) {
  //nav for browser
  //const history = useHistory();
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        // <div onClick={() => history.push(movie.id)}>
        <MovieDetails key={movie.id} movie={movie} />
        // </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        {/*movieID*/}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
