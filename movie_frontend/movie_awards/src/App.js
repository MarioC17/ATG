import React, {useState} from "react";
import Axios from "axios";
import './App.css';

function App() {
    const [movie, setMovie] = useState("");
    #Api initial test
    const getMovie = () => {
        Axios.get("http://localhost:8000/api/1/")
        .then(
            (response) => {
                console.log(response);
                setMovie(response.data);
            }
        );
    };


  return (
    <div className="App">
        <button onClick={getMovie}>Show Movie</button>
        {movie.title}
    </div>
  );
}

export default App;
