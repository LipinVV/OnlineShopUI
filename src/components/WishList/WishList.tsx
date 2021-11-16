import React, {useContext, useEffect} from 'react';
import { ProductCard } from '../Product/ProductCard';
import {keyHandler} from "../../services/keyHandler";
import {ACTION, StoreContext} from '../../App';
import {productType} from "../Product/types";
import './wishlist.scss';

export const Wishlist = () => {
    const { state, dispatch } = useContext(StoreContext);
    const favouriteProducts = state.products.filter(product => product.isFavourite);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='wishlist'>
            <div className='wishlist__wrapper'>
                {favouriteProducts.length === 0 ? <h1 className='wishlist__header'>Please add something!</h1> : <h1 className='wishlist__header'>Your WishList:</h1>}
                <div className='wishlist__card-wrapper'>
                    {favouriteProducts.map((product: productType) => (
                        <ProductCard
                            key={keyHandler(product.id)}
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
            </div>
            {favouriteProducts.length > 0 ? <button
                className='wishlist__remove-button'
                type='button'
                onClick={() => dispatch({ action: ACTION.DELETE_ALL_PRODUCTS_IN_WISHLIST, data: null})}>
                Delete all products
                </button> : null
            }
        </div>
    )
}