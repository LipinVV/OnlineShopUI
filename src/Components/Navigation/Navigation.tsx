import {Link} from "react-router-dom";
import React from "react";
import './navigation.scss'

export const Navigation = () => {

    return (
        <nav className='app__navigation'>
            <ul className='app__links'>
                <li className='app__link'><Link to='/'>Home</Link></li>
                <li className='app__link'><Link to='/shoppingCart'>Shopping Cart</Link></li>
                <li className='app__link'><Link to='/categories'>Categories</Link></li>
                <li className='app__link'><Link to='/wishlist'>WishList</Link></li>
                <li className='app__link'><Link to='/gallery'>Gallery</Link></li>
                <li className='app__link'><Link to='/articles'>Articles</Link></li>
            </ul>
        </nav>
    )
}