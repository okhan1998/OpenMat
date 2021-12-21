import { Button } from '@mui/material'
import React from 'react'
import OpenMatResult from '../components/OpenMatResult'
import '../styles/OpenMat.css'

function Openmat() {
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
            <OpenMatResult 
                img='https://images.squarespace-cdn.com/content/v1/53406330e4b0c7c09a3b7926/1575790977666-0ZBOSITFCUHW2XAP1JLR/new+mgd+2019+-+modded.jpg?format=1500w'
                location='경기 김포시 사우중로73번길 24 선일프라자'
                title='김포 골든라이언 주말 오픈맷'
                description='12월 4일 오후 5시 ~ 오후 7시. 화이트 2그랄 이상부터 참여가능'
                star={4.73}
                price='30,000원'
            />
        </div>
    )
}

export default Openmat
