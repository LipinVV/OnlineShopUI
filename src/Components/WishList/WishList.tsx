import React, { useContext } from 'react';
import { StoreContext } from '../../App';
import { ProductCard } from '../Product/ProductCard';
import './wishlist.scss';


export const Wishlist = () => {
    const { state, dispatch } = useContext(StoreContext)
    const favouriteProducts = state.products.filter(product => product.isFavourite)
    return (
        <div className='wishlist'>
            <div className='wishlist__wrapper'>
                {favouriteProducts.length === 0 ? <h1 className='wishlist__header'>Please add something!</h1> : <h1 className='wishlist__header'>Your WishList:</h1>}
                <div className='wishlist__card-wrapper'>
                    {favouriteProducts.map((product: any) => (
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
            </div>
            {favouriteProducts.length > 0 ? <button
                className='wishlist__remove-button'
                type='button'
                onClick={() => dispatch({ action: "DELETE_ALL_PRODUCTS" })}>
                Delete all products
                </button> : null
            }
        </div>
    )
}