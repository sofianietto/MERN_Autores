import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
            <div className='mt-1'><NavLink className='menu' to="/">Favorite authors</NavLink></div>
    )
}

export default Menu