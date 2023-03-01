import React from 'react'
import Cards from '../Component/MovieCard'

const MovieList = ({infos , rate , search}) => {
  return (
    <div>
        <div className='cardsContainer'>
     {(parseInt(rate) !== 0) ?  infos.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase()) && el.rating === parseInt(rate)).map((el)=>(<Cards title={el.title}  poster={el.poster} rating={el.rating}/>)) :
      infos.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((el)=>(<Cards el={el} title={el.title}  poster={el.poster} rating={el.rating}/>))}
     </div>
    </div>
  )
}

export default MovieList
