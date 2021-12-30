import { Button } from '@mui/material'
import React, {useEffect, useState} from 'react'
import OpenMatResult from '../components/OpenMatResult'
import '../styles/OpenMat.css'
import OpenMatAdd from '../components/OpenMatAdd'

function Openmat() {
    const [gymList, setGymList] = useState([])

    const stateRefresh = () => {
        setGymList([])
    
        async function callAPi() {
          const response = await fetch('/openmat/api');
          const body = await response.json();
          console.log(body);
          return body;
        }
        callAPi()
          .then(res => setGymList(res))
          .catch(err=> console.log(err));
      }

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
                variant='outlined' color='success'>Type of
                place</Button>
                <Button
                variant='outlined' color='success'>Price</Button>
                <Button
                variant='outlined' color='success'>Date</Button>
                <Button
                variant='outlined' color='success'>More 
                filters</Button>
                <Button
                variant='text' color='success'><OpenMatAdd stateRefresh={stateRefresh}/></Button>
                
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
