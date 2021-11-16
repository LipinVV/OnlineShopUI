import React from 'react';
import { Link } from 'react-router-dom';
import {getFullName} from "../../services/naming";
import {keyHandler} from "../../services/keyHandler";
import './categories.scss';

export enum CATEGORY {
    SOFA = 'sofas',
    CHAIR = 'chairs',
    DESK = 'desks',
    BED = 'beds',
    CARPET = 'carpets',
    CUPBOARD = 'cupboards'
}

const itemTypes = Object.values(CATEGORY);
export const Categories = () => {
    return (
        <nav className='categories__navigation'>
            <ul className='categories__list'>
                {itemTypes.map(item =>  (
                        <li key={keyHandler(item.length)} className={`categories__Section categories__Section-${item.toLowerCase()}`}>
                            <span className='categories__Section-name'>{getFullName(item)}</span>
                            <Link className='categories__Section-link' to={item.toLowerCase()}>shop now</Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}