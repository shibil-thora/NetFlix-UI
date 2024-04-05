import React, { useEffect, useState} from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY } from '../../Credentials/Credentials';
import { imageBaseURL } from '../../Credentials/Credentials';


function RowPost() {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
    .then((response) => setmovies(response.data.results))
  }, [])

  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className="posters">
            
            {movies.map((movie) => 
            <img className="poster" src={`${imageBaseURL}${movie.backdrop_path}`}/>
            )}
        </div>
    </div>
  )
}

export default RowPost