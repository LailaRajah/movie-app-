import Card from 'react-bootstrap/Card';
import './MovieCard.css'
import ReactStars from 'react-stars'
import React from 'react'

function Cards({poster,title,rating}) {
  return (
    

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <ReactStars
         className='stars'
            count={5}
            value={rating}
            size={24}
            color2={'#ffd700'} 
            />
         </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default Cards;
