import React, {useState} from 'react'
import '../styles/Banner.css'
import Button from '@mui/material/Button';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <h1> <Search /></h1>}
                <Button onClick = {() => 
                setShowSearch(!showSearch)}
                className='banner__searchButton'
                variant='outlined'>Search Dates</Button>
            </div>
            <div className='banner__info'>
                <h1>새로운 사람과 새로운 경험을</h1>
                <h5>
                    오픈매트를 통해 언제 어디서든 주짓수를 즐길 수 있습니다.
                </h5>
                <Button
                variant='outlined'>
                오픈맷 찾기
                </Button>
            </div>
        </div>
    )
}

export default Banner