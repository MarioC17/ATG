import Movie from '../movie/Movie';
import Stack from '@mui/material/Stack';
// Displays all the movies in the movies variable in a stack in card form
const DisplayMovies = ({ movies,DBMovies,fetchDBMovies }) => {
    return (
        <Stack align="center" direction="column" spacing={2}>
            {movies.map(movie => (
                <Movie key={movie.imdbID} movie={movie} fetchDBMovies={fetchDBMovies} DBMovies={DBMovies}/>
            ))}
        </Stack>
    )
}

export default DisplayMovies