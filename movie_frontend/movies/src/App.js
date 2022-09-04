import SearchBar from "./components/searchbar/SearchBar";
import React from 'react'
import { useState} from 'react';
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import TopBar from './components/TopBar/tobbar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './App.css';
import ListMovies from './components/listMovies/ListMovies';

function App() {
    const [search, setSearch] = useState('');
    const [OMDBMovies, setOMDBMovies] = useState([])
    const [DBMovies, setDBMovies] = useState([])

    //Search the OMDB database for movies with the given search term
    const fetchOMDBMovies = async () => {
        try {
            await Axios.get(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=1ae6f8f9`)
            .then(
                (response) => {
                    if (response.data.Response === "True"){
                        setOMDBMovies(response.data.Search);
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

    //Retrieves all the movies in the DB and stores it in the DBMovies state
    const fetchDBMovies = async () => {
        try {
            await Axios.get(`http://localhost:8000/api/`)
            .then(
                (response) => {
                    setDBMovies(response.data);
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
    };

    //Populates the DBMovies state
    useEffect(() => {
        fetchDBMovies();
      }, [])

    //set the movie limit banner in a variable
    let banner;
    //Checks if limit of 5 is hit
    if (DBMovies.length > 4){
        //Limit reached banner is active
        banner=
            <Toolbar style={{ background: 'red' }}>
                <Grid alignItems="center" container>
                    <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        5 Movie save limit has been reached!
                    </Typography>
                </Grid>
            </Toolbar>
    }
      return (
        <BrowserRouter>
        <TopBar DBMovies={DBMovies}/>
        {banner}
        <div className="App">
            <Routes>
                {/* Movie search */}
                <Route exact path="/" element=
                {
                <div class="content">
                    <SearchBar search={search} setSearch={setSearch} OMDBMovies={OMDBMovies} DBMovies={DBMovies} setDBMovies={setDBMovies} setOMDBMovies={setOMDBMovies} fetchOMDBMovies={fetchOMDBMovies} />
                    <ListMovies movies={OMDBMovies} DBMovies={DBMovies} fetchDBMovies={fetchDBMovies}/>
                    
                </div>
                } />
                {/* Picked Movies */}
                <Route exact path="/DBMovies" 
                element=
                {
                <div class="content">
                    <ListMovies movies={DBMovies} DBMovies={DBMovies} fetchDBMovies={fetchDBMovies}/>
                </div>
                } />
        
            </Routes>
        </div>
        </BrowserRouter>
      );
    }

export default App;
