import React, { useEffect, useState} from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageBaseURL } from '../../Credentials/Credentials';
import Youtube from 'react-youtube'


function RowPost(props) {
  const [movies, setmovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.webService)
    .then((response) => setmovies(response.data.results))
  }, []) 

  function handlePosterClick(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    .then((response) => {
      if(response.data.results[0]) {
      console.log(urlId)
      setUrlId(response.data.results[0])
      }
    })
  }

  const opts = {
    height: '380',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            
            {movies.map((movie, index) => 
            <img key={index} onClick={() => handlePosterClick(movie.id)} className={props.class_name} src={`${imageBaseURL}${movie.backdrop_path}`}/>
            )}
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost