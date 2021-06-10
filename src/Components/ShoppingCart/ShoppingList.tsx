import React, { useState, useContext } from 'react'
import { StoreContext } from '../../App';
import { ShoppingCard } from './ShoppingCard'
import './shoppingCart.scss';
import {getTotalPriceForProduct} from "../../Services/products";

export const ShoppingList = () => {
    const { state } = useContext(StoreContext)
    const productsToBuy = state.cart

    const priceCalculationHandler = state.cart.reduce((acc, item) => {
        const totalPricePerProduct: number = getTotalPriceForProduct(item)
        return acc + (totalPricePerProduct * item.quantity);
    }, 0)

    return (
        <div>
            <h1>
                Here you can complete your order!
            </h1>
            {productsToBuy.map((product: any) => (
                <ShoppingCard
                    product = {product}
                />
            ))}
            <div className={'shopping-list__price-calculation'}>total: {priceCalculationHandler}</div>
        </div>
    )
}