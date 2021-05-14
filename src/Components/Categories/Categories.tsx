import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const Categories = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/sofas">Sofas</Link></li>
                <li><Link to="/chairs">Chairs</Link></li>
            </ul>
        </nav>
    )
}