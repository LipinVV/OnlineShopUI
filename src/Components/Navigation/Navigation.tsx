import {Link, Route} from "react-router-dom";
import React, {useContext, useState} from "react";
import './navigation.scss'
import '../../App.scss'
import {StoreContext} from '../../App';
import {ProductCard} from "../Product/ProductCard";

export const Navigation = () => {

    const [menu, setMenu] = useState(false);
    const menuToggleHandler = () => {
        setMenu(!menu)
    }
    const [subMenu, setSubMenu] = useState(true);
    const subMenuToggleHandler = () => {
        setSubMenu(!subMenu)
    }

    const {state, dispatch} = useContext(StoreContext)
    const searchedProducts = state.products;

    const [search, setSearch] = useState('');
    const handleSearcher = (evt: any) => {
        const {value} = evt.target;
        setSearch(value);
    }

    const filterLogic = searchedProducts.filter(value => {
        if (search === '') {
            return search
        }
        if (value?.title.toLowerCase().includes(search?.toLowerCase())) {
            return value
        }
    })

    const [style, setStyle] = useState(false)

    return (
        <div className='navigation__wrapper'>
            <nav className='app__navigation'>
                <ul className='navigation'>
                    <li className='navigation__shop'><Link className='navigation__shop-link' to='/'>Shop Bag</Link></li>
                    <li onClick={subMenuToggleHandler} className='app__caterogies-desktop'>Categories
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
                        <Link className='app__link-gallery' to='/gallery'>Gallery</Link></li>
                    <li className='navigation__search'>
                        <input
                            className='navigation__search-input'
                            type='text'
                            placeholder='Search'
                            onChange={handleSearcher}
                            value={search}
                        />
                        <button className='navigation__search-btn'></button>
                    </li>
                    <Link className='app__link-desktop__cart' to='/shoppingCart'></Link>
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
                // return <ProductCard
                //     key={elem.id}
                //     id={elem.id}
                //     category={elem.category}
                //     title={elem.title}
                //     price={elem.price}
                //     discount={elem.discount}
                //     isFavourite={elem.isFavourite}
                //     toBuy={elem.toBuy}
                //     options={elem.options}
                //     previewUrl={elem.previewUrl} rating={elem.rating} salesCount={elem.salesCount}
                // />
                return <div>{elem.title}
                    <button style={{ display: (style ? 'none' : 'block') }} className='productCard__details' onClick={() => setStyle(!style)}>
                        <Link className='productCard__link' to={`/${elem.category}/${elem.id}`}>Details</Link>
                    </button>
                </div>
            })}</div> : null}
        </div>
    )
}