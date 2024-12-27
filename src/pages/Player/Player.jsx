import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe src='https://www.youtube.com/embed/QOhj3m0fHnA' width='90%' height='90%' title='trailer' 
      frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
