import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './categories.scss'

export const Categories = () => {

    return (
        <nav className='categories__Navigation'>
            <ul className='categories__List'>
                <li className='categories__Section categories__Section-beds'>
                    <span className='categories__Section-name'>Beds</span>
                    <Link className='categories__Section-link' to='/beds'>shop now</Link>
                </li>
                <li className='categories__Section categories__Section-chairs'>
                    <span className='categories__Section-name'>Chairs</span>
                    <Link className='categories__Section-link' to='/chairs'>shop now</Link>
                </li>
                <li className='categories__Section categories__Section-desks'>
                    <span className='categories__Section-name'>Desks</span>
                    <Link className='categories__Section-link' to='/desks'>shop now</Link>
                </li>
                <li className='categories__Section categories__Section-cupboards'>
                    <span className='categories__Section-name'>Cupboards</span>
                    <Link className='categories__Section-link' to='/cupboards'>shop now</Link>
                </li>
                <li className='categories__Section categories__Section-sofas'>
                    <span className='categories__Section-name'>Sofas</span>
                    <Link className='categories__Section-link' to='/sofas'>shop now</Link>
                </li>
                <li className='categories__Section categories__Section-carpets'>
                    <span className='categories__Section-name'>Carpets</span>
                    <Link className='categories__Section-link' to='/carpets'>shop now</Link>
                </li>
            </ul>
        </nav>
    )
}