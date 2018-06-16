import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className="Header">
        <ul>
            <li><Link to='/posts'>Posts</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </header>
)

export default Header
