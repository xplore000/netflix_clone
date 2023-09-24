import React from 'react'
import { useEffect } from 'react'
import {apikey,imageurl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import { useState } from 'react'

function Banner() {
  const [movie, setMovie] = useState("")
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
      setMovie(response.data.results[Math.floor(Math.random()*21)])
    })
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${imageurl+movie.backdrop_path})`}}
    className='banner'>
        <div className='content'>
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <h1 className="title">{movie ? movie.name : ""}</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie.overview}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner