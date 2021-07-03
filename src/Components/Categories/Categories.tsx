import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './categories.scss'
import { CATEGORY } from '../Data/data'
import {getFullCategoryName} from "../../Services/naming";
import {keyHandler} from "../../Services/keyHandler";

const itemTypes = Object.values(CATEGORY);
export const Categories = () => {
    return (
        <nav className='categories__navigation'>
            <ul className='categories__list'>
                {itemTypes.map(item =>  (
                        <li key={keyHandler(item.length)} className={`categories__Section categories__Section-${item.toLowerCase()}`}>
                            <span className='categories__Section-name'>{getFullCategoryName(item)}</span>
                            <Link className='categories__Section-link' to={item.toLowerCase()}>shop now</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}