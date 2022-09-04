import DisplayMovies from '../../components/DisplayMovies/DisplayMovies';
import Grid from '@mui/material/Grid';

// Lists the movies in the movies prop and passes it to the display movies component
// If their are no movies in the movies prop it shows a "no movies" message
const ListMovies = ({ movies,DBMovies,fetchDBMovies }) => {
    return (
        <main className="Home" sx={{ mt: 2 }}>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >  
                <Grid item xs={4}>
                    {movies.length ? (
                    <DisplayMovies movies={movies} fetchDBMovies={fetchDBMovies} DBMovies={DBMovies} />
                    ) : (
                        <p style={{ marginTop: "2rem" }}>
                            No movies to display.
                        </p>
                    )}
                </Grid> 
            </Grid>
        </main>
    )
}

export default ListMovies