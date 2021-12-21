import React from 'react'
import Banner from '../components/Banner'
import '../styles/Home.css'
import Card from '../components/Card'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            <Card 
                src='https://i.pinimg.com/originals/88/68/cf/8868cf75186ba25c0751e9b667cd6145.jpg'
                description='오픈매트를 통해 주짓수를 나눠요.'
                title='오픈매트'
            />
            <Card
                src='https://thebasicsgjj.com/wp-content/uploads/104-1024x576.jpg'
                description='세계적인 선수의 주짓수를 배워요.'
                title='세미나'
             />
            <Card 
                src='https://c9s7m4w3.rocketcdn.me/wp-content/uploads/2021/05/best-bjj-competitions-1.jpg'
                description='도전하는 당신을 응원합니다.'
                title='대회일정'
            />
            </div>
        </div> 
    )
}

export default Home
