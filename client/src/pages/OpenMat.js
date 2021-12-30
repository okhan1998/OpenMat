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
                <p>총 {gymList.length}개의 체육관에 오픈매트 일정이 있습니다.</p>
                <h1>오픈매트 체육관</h1>
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
                stateRefresh={stateRefresh}
                id={gym.id}
            />))}
            
        </div>
    )
}

export default Openmat
