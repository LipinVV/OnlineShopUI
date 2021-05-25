import React, { useState, useEffect, useContext } from 'react';
import { products } from '../Data/data'

const someData = products.map(item => item.isFavourite)

export const CartContext = React.createContext(someData);
export const CartProvider = () => {
    return (
        <CartContext.Provider value={someData}>
        </CartContext.Provider>
    )
}
