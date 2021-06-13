import {Link, Route} from "react-router-dom";
import React, {useState} from "react";
import './navigation.scss'

export const Navigation = () => {

    const [menu, setMenu] = useState(false);
    const menuToggleHandler = () => {
        setMenu(!menu)
    }
    const [subMenu, setSubMenu] = useState(true);
    const subMenuToggleHandler = () => {
        setSubMenu(!subMenu)
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
                <li onClick={subMenuToggleHandler} className='app__link'>Categories
                        {!subMenu ?
                            <div className='app__link-subroutes'>
                                <Link className='app__link-subroute' to='/categories'>All Categories</Link>
                                <Link className='app__link-subroute' to='/sofas'>Sofas</Link>
                                <Link className='app__link-subroute' to='/chairs'>Chairs</Link>
                                <Link className='app__link-subroute' to='/desks'>Desks</Link>
                                <Link className='app__link-subroute' to='/beds'>Beds</Link>
                                <Link className='app__link-subroute' to='/carpets'>Carpets</Link>
                                <Link className='app__link-subroute' to='/cupboards'>Cupboards</Link>
                            </div>
                            : null}
                </li>
                <li className='app__link'><Link className='app__link-route' to='/shoppingCart'>Shopping Cart</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/wishlist'>WishList</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/'>Sign Up</Link></li>
                <li className='app__link'><Link className='app__link-route' to='/'>Login</Link></li>
            </ul> : null}
        </nav>

    )
}