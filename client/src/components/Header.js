import React from 'react'
import '../styles/Header.css'
import 오픈맷로고 from './오픈맷로고.png';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <Link to='/'><img
                className='header__icon'
                src={오픈맷로고}
                alt='logo'
            /></Link>
            <div className='header__center'>
                <input type='text' />
                <SearchIcon />
            </div>
            <div className='header__right'>
                <ExpandMoreIcon />
                <Avatar />
            </div>
            
        </div>
    )
}

export default Header
