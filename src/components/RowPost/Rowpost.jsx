import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import {apikey,baseUrl, imageurl} from '../../constants/constants'
import axios from '../../axios' 
function Rowpost() {
  const [movies,setmovies] =useState([])
  useEffect(() => {
   axios.get(`discover/tv?api_key=${apikey}&with_networks=213`).then((response)=>{
    console.log(response.data)  
    setmovies(response.data.results)

   })
  }, [])
  
  return (
    <div className='row'>
        <h2>Netflix Orginals</h2>
        <div className="posters">
          {movies.map((obj)=>{
            return(
              <img className='poster' src={`${imageurl+obj.backdrop_path}`} alt="" />

            )

          })}
        </div>
    </div>
  )
}

export default Rowpost