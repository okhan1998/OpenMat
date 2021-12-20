import React from 'react'
import '../styles/Card.css'
function Card({src, title, description}) {
    return (
        <div className='card'>
            <img src={src} alt='' />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div> 
        </div>
    )
}

export default Card
