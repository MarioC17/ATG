import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Axios from "axios";


// Card containing the movies information and add/remove buttons
export default function ActionAreaCard({ movie,saved,DBMovies,fetchDBMovies }) {

    //Save Movie into db
    const saveMovie= async () => {
        let formField = new FormData()
        try {
            await Axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=1ae6f8f9`)
            .then(
                (response) => {
                    if (response.data.Response === "True"){
                        formField.append('Title',response.data.Title)
                        formField.append('Year',response.data.Year)
                        formField.append('Rated',response.data.Rated)
                        formField.append('Released',response.data.Released)
                        formField.append('Runtime',response.data.Runtime)
                        formField.append('Genre',response.data.Genre)
                        formField.append('Director',response.data.Director)
                        formField.append('Writer',response.data.Writer)
                        formField.append('Actors',response.data.Actors)
                        formField.append('Plot',response.data.Plot)
                        formField.append('Language',response.data.Language)
                        formField.append('Country',response.data.Country)
                        formField.append('Awards',response.data.Awards)
                        formField.append('Poster',response.data.Poster)
                        formField.append('Ratings',response.data.Ratings)
                        formField.append('Metascore',response.data.Metascore)
                        formField.append('imdbRating',response.data.imdbRating)
                        formField.append('imdbVotes',response.data.imdbVotes)
                        formField.append('imdbID',response.data.imdbID)
                        formField.append('Type',response.data.Type)
                        formField.append('DVD',response.data.DVD)
                        formField.append('BoxOffice',response.data.BoxOffice)
                        formField.append('Production',response.data.Production)
                        formField.append('Website',response.data.Website)
                        formField.append('Response',response.data.Response)
                        Axios({
                            method: 'post',
                            url:'http://localhost:8000/api/',
                            data: formField
                        }).then(response=>{
                            //Updates DB movies list
                            fetchDBMovies()
                        })
                    }
                }
            );
            } 
        catch (err) {
            if (err.response) {
                // Not in the 200 response range 
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } 
            else {
                console.log(`Error: ${err.message}`);
            }
        }
      }

    //Delete movie from database
    const deleteMovie= async () => {
        try {
            await Axios({
                method: 'delete',
                url:`http://localhost:8000/api/delete/imdbID=${movie.imdbID}/`,
            }).then(response=>{
                fetchDBMovies()
            })
            }
        catch (err) {
            if (err.response) {
                // Not in the 200 response range 
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } 
            else {
                console.log(`Error: ${err.message}`);
            }
        }
    }

    //add and remove buttons
    let buttons;
    //remove activated
    if (saved === 1) {
        buttons = 
        <Stack direction="row" spacing={1}>
            <Button variant="contained" disabled>Add</Button>
            <Button variant="contained" onClick={deleteMovie}>Remove</Button>
        </Stack>
    }
    //add activated
    if (saved === 2) {
        buttons = 
        <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={saveMovie}>Add</Button>
            <Button variant="contained" disabled>Remove</Button>
        </Stack>
    }
    //remove and add deactivated
    if (saved === 3) {
        buttons = 
        <Stack direction="row" spacing={1}>
            <Button variant="contained" disabled onClick={saveMovie}>Add</Button>
            <Button variant="contained" disabled>Remove</Button>
        </Stack>
    }
    
  return (
    <Card sx={{ maxWidth: 800 }} style={{backgroundColor: "white"}}>
        <CardContent>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={4}>
                    <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={movie.Poster}
                    alt="movie poster"
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h5" component="div">
                    {movie.Title} ({movie.Year})
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    {buttons}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}
