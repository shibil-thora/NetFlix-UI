import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">play</button>
                <button className="button">my list</button> 
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis dolores non enim odit! Veniam, inventore ut dolores repellat  </h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner