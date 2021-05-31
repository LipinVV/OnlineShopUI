import React, {useState, useContext} from 'react'
import {StoreContext} from '../../App';
import {ShoppingCard} from './ShoppingCard'
import './shoppingCart.scss';

export const ShoppingList = () => {
    const {state, dispatch} = useContext(StoreContext)
    const productsToBuy = state.cart
    const total = productsToBuy.map(x => Math.ceil(x.price - ((x.discount ? x.discount / 100 : 0) * x.price)))
    const [calcPrice, setCalcPrice] = useState(total);
    console.log('state', state.cart)
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
                    quantity={product.quantity}
                    finalPrice={product.finalPrice}
                />
            ))}
            <div>{calcPrice}</div>
        </div>
    )
}

// попробовать прямо тут отрисовать, вместо отдельного элемента Card?
