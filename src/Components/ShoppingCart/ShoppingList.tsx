import React, { useContext } from 'react'
import { StoreContext } from '../../App';
import { ShoppingCard } from './ShoppingCard'
import './shoppingCart.scss';
import {getTotalPriceForProduct} from "../../Services/products";
import {keyHandler} from "../../Services/key-handler";

export const ShoppingList = () => {
    const { state } = useContext(StoreContext)
    const productsToBuy = state.cart

    const priceCalculationHandler = state.cart.reduce((acc, item) => {
        const totalPricePerProduct: number = getTotalPriceForProduct(item)
        return acc + (totalPricePerProduct * item.quantity);
    }, 0)

    return (
        <div className='shopping-cart'>
            {productsToBuy.length === 0 ? <h1 className='shopping-cart__title'>Please put something into your shopping cart!</h1> : <h1 className='shopping-cart__title'>Shopping Cart</h1>}
            {productsToBuy.map((product: any) => (
                <ShoppingCard
                    key={keyHandler(product.id * 100)}
                    product = {product}
                />
            ))}
            {productsToBuy.length === 0 ? null : <div className='shopping-cart__price-calculation'>Total: ${priceCalculationHandler}</div>}
        </div>
    )
}