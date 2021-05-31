import React, { useState, useContext } from 'react'
import { StoreContext } from '../../App';
import { ShoppingCard } from './ShoppingCard'
import './shoppingCart.scss';

export const ShoppingList = () => {
    const { state, dispatch } = useContext(StoreContext)
    const productsToBuy = state.products.filter(product => product.toBuy)
    const total = productsToBuy.map(x => Math.ceil(x.price - ((x.discount ? x.discount / 100 : 0) * x.price)))
    const [calcPrice, setCalcPrice] = useState(total);

    const [counter, setCounter] = useState(1);
    const countHandlerIncrementer = () => {
        setCounter(prevState => prevState + 1)
        //@ts-ignore
        setCalcPrice(prevState => counter === 1 ? total * 2 : total * counter)
    } // prevState === total ? prevState = total : total * counter
    const countHandlerDecrementer = () => {
        setCounter(prevState => prevState <= 1 ? prevState = 1 : prevState - 1)
        //@ts-ignore
        setCalcPrice(prevState => prevState - total)
    }

    return (
        <div>
            <h1>
                Here you can complete your order!
            </h1>
            {productsToBuy.map((product: any) => (
                <ShoppingCard
                    id={product.id}
                    category={product.category}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                    previewUrl={product.previewUrl}
                    rating={product.rating}
                    salesCount={product.salesCount}
                    isFavourite={product.isFavourite}
                    toBuy={product.toBuy}
                />
            ))}
            <div>{calcPrice}</div>
        </div>
    )
}

// попробовать прямо тут отрисовать, вместо отдельного элемента Card?