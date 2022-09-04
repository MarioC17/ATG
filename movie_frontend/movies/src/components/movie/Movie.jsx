import * as React from 'react';
import MovieCard from '../MovieCard/MovieCard'

//Checks if a movie exists inside the database
function movieSaved(DBMovies,imdbID) {
    return DBMovies.some(function(elem) {
      return elem.imdbID === imdbID;
    }); 
  }
 
export default function ActionAreaCard({ movie,DBMovies,fetchDBMovies }) {
    //Saved movies have the option to be removed from DB
    if (movieSaved(DBMovies,movie.imdbID)){
        return (
            <MovieCard movie={movie} saved={1} DBMovies={DBMovies} fetchDBMovies={fetchDBMovies}/>
          );
    }

    else{
        // Movie limit reached, add button is deactivated
        if (DBMovies.length > 4){
            return (
                <MovieCard movie={movie} saved={3} DBMovies={DBMovies} fetchDBMovies={fetchDBMovies}/>
              );
        }
        // Movie is not in database and limit has not been hit. User can add movie
        else{
            return (
                <MovieCard movie={movie} saved={2} DBMovies={DBMovies} fetchDBMovies={fetchDBMovies}/>
              );
        }
    }
}
