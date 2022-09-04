import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

//Top bar for header
export default function TopBar(DBMovies) {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1, mb: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Movie Awards
            </Typography>
            <Button color="inherit" onClick={() => navigate('/')}>Find Movies</Button>
            <Button color="inherit" onClick={() => navigate('/DBMovies')}>My Picks</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
