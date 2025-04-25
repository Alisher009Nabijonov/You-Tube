import React from 'react'
import './Video.css'
import PlayVide from '../../Components/PlayVideo/PlayVide'
import Reccommendend from '../../Components/Reccommended/Reccommended'
export const Video = () => {
  return (
    <div className='play-container'>
      <PlayVide/>
      <Reccommendend/>
    </div>
    
  )
}

