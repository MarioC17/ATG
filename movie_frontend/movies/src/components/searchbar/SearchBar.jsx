import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';

//Search bar for finding movies in the OMDB database
const SearchBar = ({ search, setSearch,fetchOMDBMovies }) => {
    return (
        <FormGroup row>
            <TextField id="search"
                    type="text"
                    placeholder="Movie Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    variant="outlined" />
            <Button onClick={fetchOMDBMovies} variant="contained" disableElevation>Search</Button>
        </FormGroup>
    )
}

export default SearchBar