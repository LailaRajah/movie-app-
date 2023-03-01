import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Movie = () => {
    const movie = useLocation().state
  return (
    <>
    <div className='details'>
      <h1>{movie.title}</h1>
      <ReactPlayer url={movie.trailer} />
      <h6>{movie.description}</h6>
</div>
    </>
  )
}

export default Movie
