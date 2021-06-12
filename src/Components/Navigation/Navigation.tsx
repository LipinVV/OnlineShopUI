import {Link} from "react-router-dom";
import React, {useState} from "react";
import './navigation.scss'

export const Navigation = () => {

    const [menu, setMenu] = useState(false);
    const menuToggleHandler = () => {
        setMenu(!menu)
    }
    return (
        <nav className='app__navigation'>
            <ul className='navigation'>
                <li className='navigation__shop'><Link className='navigation__shop-link' to='/'>Shop Bag</Link></li>
                <li className='navigation__search'>
                        <input className='navigation__search-input' type='text' placeholder='Search' />
                    <button className='navigation__search-btn'></button>
                </li>
                <li className='navigation__menu'>
                    <button onClick={menuToggleHandler} className='navigation__menu-btn'></button>
                </li>
            </ul>

            {menu ? <ul className='app__links'>
                <li className='app__link'><Link className='app__link-route' to='/categories'>Category</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/shoppingCart'>Shopping Cart</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/wishlist'>WishList</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/'>Sign Up</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/'>Login</Link></li>
            </ul> : null}
        </nav>
    )
}