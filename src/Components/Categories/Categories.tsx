import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './categories.scss'
import { CATEGORY } from '../Data/data'
import {getFullProductName} from "../../Services/naming";
const itemTypes = Object.values(CATEGORY);

export const Categories = () => {
    return (
        <nav className='categories__Navigation'>
            <ul className='categories__List'>
                {itemTypes.map(item =>  (
                        <li className={`categories__Section categories__Section-${item.toLowerCase()}`}>
                            <span className='categories__Section-name'>{getFullProductName(item)}</span>
                            <Link className='categories__Section-link' to={item.toLowerCase()}>shop now</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}