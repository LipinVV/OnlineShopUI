import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './categories.scss'
import { CATEGORY } from './../Data/data'
import { StoreContext } from '../../App';
// const itemTypes = Object.values(CATEGORY);

export const Categories = () => {
    const { state, dispatch } = useContext(StoreContext)
    return (
        <nav className='categories__Navigation'>
            <ul className='categories__List'>
                {state.products.map(item =>  (
                        <li className={`categories__Section categories__Section-${item.category.toLowerCase()}`}>
                            <span className='categories__Section-name'>{item.category}</span>
                            <Link className='categories__Section-link' to={item.category.toLowerCase()}>shop now</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}