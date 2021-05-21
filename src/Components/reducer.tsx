import React, { useState, useEffect, useContext, useReducer } from 'react';
import { productType } from './Product/types'
import { products } from '../Components/Data/data'
console.log(products.map(x => x.isFavourite))
export const initialState = { isFavourite: false };

function reducer(state, action) {
    switch (action.type) {
        case false:
            return { isFavourite: !state.isFavourite };
        case true:
            return { isFavourite: !state.isFavourite };
        default:
            throw new Error();
    }
}

export function StateChanger() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <button onClick={() => dispatch({ type: true })}>Dispatch state: {state.isFavourite.toString()}</button>
        </div>
    )
}