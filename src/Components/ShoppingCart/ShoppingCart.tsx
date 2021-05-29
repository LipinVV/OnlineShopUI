import React, { useContext } from 'react'
import { StoreContext } from '../../App';
import { ProductCard } from '../Product/ProductCard';
import './shoppingCart.scss';

export const ShoppingCart = () => {
    const { state, dispatch } = useContext(StoreContext)
    const productsToBuy = state.products.filter(product => product.toBuy)


    return (
        <div>
            <h1>
                Here you can complete your order!
            </h1>
            {productsToBuy.map((product: any) => (
                <ProductCard
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
        </div>
    )
}