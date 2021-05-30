import React, { useContext } from 'react'
import { StoreContext } from '../../App';
import { ShoppingCard } from './ShoppingCard'
import './shoppingCart.scss';

export const ShoppingCart = () => {
    const { state, dispatch } = useContext(StoreContext)
    const productsToBuy = state.products.filter(product => product.toBuy)
    
    const total = productsToBuy.map(x => Math.ceil(x.price - ((x.discount ? x.discount / 100 : 0) * x.price)))
    
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
                    options={product.options}
                    salesCount={product.salesCount}
                    isFavourite={product.isFavourite}
                    toBuy={product.toBuy}
                />
            ))}
            <div>{total}</div>
        </div>
    )
}

// попробовать прямо тут отрисовать, вместо отдельного элемента Card?