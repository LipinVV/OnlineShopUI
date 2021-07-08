import { Link } from "react-router-dom";
import React, {useContext, useState} from "react";
import './navigation.scss'
import '../../App.scss'
import { StoreContext } from '../../App';

export const Navigation = () => {

    const [menu, setMenu] = useState(false);
    const menuToggleHandler = () => {
        setMenu(!menu)
    }
    const [subMenu, setSubMenu] = useState(true);
    const subMenuToggleHandler = () => {
        setSubMenu(!subMenu)
    }

    const { state } = useContext(StoreContext)
    const searchedProducts = state.products;

    const [search, setSearch] = useState('');

    const handleSearcher = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setSearch(value);
    }
    const [style] = useState(false)
    const filterLogic = searchedProducts.filter(value => {
        if (search === '') {
            return search
        }
        if (value?.title.toLowerCase().includes(search?.toLowerCase())) {
            return value
        }
    })

    const handleKeyPress: any = (evt: React.KeyboardEvent<any>) => {
        if (evt.code === 'Enter') {
            setSearch('')
        }
    }

    return (
        <div className='navigation__wrapper'>
            <nav className='app__navigation'>
                <ul className='navigation'>
                    <li className='navigation__shop'><Link className='navigation__shop-link' to='/'>Shop Bag</Link></li>
                    <li onClick={subMenuToggleHandler} className='app__categories-desktop'>Categories
                        {!subMenu ?
                            <div className='app__link-desktop__subroutes'>
                                <Link className='app__link-desktop__subroute' to='/categories'>All Categories</Link>
                                <Link className='app__link-desktop__subroute' to='/sofas'>Sofas</Link>
                                <Link className='app__link-desktop__subroute' to='/chairs'>Chairs</Link>
                                <Link className='app__link-desktop__subroute' to='/desks'>Desks</Link>
                                <Link className='app__link-desktop__subroute' to='/beds'>Beds</Link>
                                <Link className='app__link-desktop__subroute' to='/carpets'>Carpets</Link>
                                <Link className='app__link-desktop__subroute' to='/cupboards'>Cupboards</Link>
                            </div>
                            : null}
                    </li>
                    <li className='app__link-desktop__gallery'>
                        <Link className='app__link-gallery' to='/admin'>Admin</Link></li>
                    <li className='navigation__search'>
                        <input
                            className='navigation__search-input'
                            type='text'
                            placeholder='Search'
                            onChange={handleSearcher}
                            onKeyDown={handleKeyPress}
                            value={search}
                        />
                        <button className='navigation__search-btn'></button>
                    </li>
                    <Link className='app__link-desktop__cart' to='/shoppingCart'>{state.cart.length === 0 ? '' : state.cart.length}</Link>
                    <Link className='app__link-desktop__wishlist' to='/wishlist'></Link>
                    <Link className='app__link-desktop__sign' to='/'>Sign Up</Link>
                    <Link className='app__link-desktop__login' to='/'>Login</Link>
                    <li className='navigation__mobile-menu'>
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
            {search !== '' && search.length >= 1 && !style ? <div className='navigation__dropdown '>{filterLogic.map(elem => {
                return <div
                    style={{ 'backgroundImage': `url(${elem.previewUrl})` }}
                    className='navigation__card-preview'
                >
                    <button style={{ display: (style ? 'none' : 'block') }} className='navigation__details' onClick={() => setSearch('')}>
                        <Link className='navigation__link' to={`/${elem.category}/${elem.id}`}>{elem.title}</Link>
                    </button>
                </div>
            })}</div> : null}
        </div>
    )
}