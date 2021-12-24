import { Button } from '@mui/material'
import React, {useEffect, useState} from 'react'
import OpenMatResult from '../components/OpenMatResult'
import '../styles/OpenMat.css'

function Openmat() {
    const [gymList, setGymList] = useState([])

    useEffect(() => {
        async function callAPi() {
            const response = await fetch('/openmat/api');
            const body = await response.json();
            console.log(body);
            return body
            }
            callAPi()
                .then(res => setGymList(res))
                .catch(err => console.log(err))
            console.log(gymList)
    }, ['/openmat'])

    return (
        <div className='OpenMatPage'>
            <div className='OpenMatPage__info'>
                <p>62 stays 25 august to 30
                august 2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                variant='outlined'>Cancellation
                Flexibility</Button>
                <Button
                variant='outlined'>Type of
                place</Button>
                <Button
                variant='outlined'>Price</Button>
                <Button
                variant='outlined'>Rooms and
                beds</Button>
                <Button
                variant='outlined'>More 
                filters</Button>
            </div>
            {gymList.length === 0 ? "" : gymList.map(gym => (<OpenMatResult 
                img={gym.img}
                location={gym.location}
                title={gym.title}
                description={gym.description}
                star={gym.star}
                price={gym.price}
            />))}
            
        </div>
    )
}

export default Openmat
