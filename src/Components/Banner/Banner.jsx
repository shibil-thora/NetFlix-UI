import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY, imageBaseURL} from '../../Credentials/Credentials';
import axios from '../../axios.js'

function Banner() {
  const [movie, setMovie] = useState('')
  const randInt = Math.floor(Math.random() * 19)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      setMovie(response.data.results[randInt])
    }).catch(err => window.alert(err));
  }, [])


  return (
    <div style={{backgroundImage: `url(${imageBaseURL}${movie ? movie.backdrop_path : '' })`}} className='banner'>
        <div className='content'>
            <h1 className="title">{movie ? movie.name: 'None'}</h1>
            <div className="banner_buttons">
                <button className="button">play</button>
                <button className="button">my list</button> 
            </div>
            <h1 className='description'>{movie ? movie.overview.slice(0, 200): 'None'}</h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner