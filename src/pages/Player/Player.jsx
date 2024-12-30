import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  })  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRiYmM5YTdhYjc2MzE2ZWZkY2QyMTQxNDFjNDRlOCIsIm5iZiI6MTczNTI5MzAyNS40Mywic3ViIjoiNjc2ZTc4NjEzZGZmMGRlOTliNjE2Y2E4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dfv9cNEpHJ9eJWoepxRBUH_KBnNtjwAjIgerCoE179A'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' 
      frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
