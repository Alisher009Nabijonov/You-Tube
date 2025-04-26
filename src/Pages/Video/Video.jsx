import React from 'react'
import './Video.css'
import PlayVide from '../../Components/PlayVideo/PlayVide'
import Reccommendend from '../../Components/Reccommended/Reccommended'
import { useParams } from 'react-router-dom'
export const Video = () => {

  const {videoId, categoryId} = useParams();

  return (
    <div className='play-container'>
      <PlayVide videoId={videoId}/>
      <Reccommendend categoryId={categoryId}/>
    </div>
    
  )
}

