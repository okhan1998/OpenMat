import React from 'react'
import '../styles/Card.css'
import {Link} from 'react-router-dom'
function Card({src, title, description, to}) {
    return (
        
        <Link to={to} className='card'>
            <img src={src} alt='' />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div> 
        </Link>
    )
}

export default Card
