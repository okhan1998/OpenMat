import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import '../styles/OpenMatResult.css'
function OpenMatResult({
    img,
    location,
    title,
    description,
    star,
    price
}) {
    return (
        <div className='openMatResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon
            className="openMatResult__heart" />
            <div className='openMatResult__info'>
                <div className='openMatResult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className='openMatResult__infoBottom'>
                    <div className='openMatResult__stars'>
                        <StarIcon className='openMatResult__star'/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div
                    className='openMatResult__price'>
                        <h2>{price}</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OpenMatResult
