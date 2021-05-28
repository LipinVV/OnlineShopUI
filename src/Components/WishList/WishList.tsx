import React, { useContext } from 'react';
import { StoreContext } from '../../App';
import { ProductCard } from '../Product/ProductCard';
import './wishlist.scss';

export const Wishlist = () => {
    // @ts-ignore
    const { state, dispatch } = useContext(StoreContext)

    return (
        // @ts-ignore
        <div className='wishlist'>
            <h1 className='wishlist__header'>Your WishList:</h1>
            {Object.values(state.products).map(x => {
                if (!x.isFavourite) {
                    return (
                        <ProductCard
                            id={x.id}
                            category={x.category}
                            title={x.title}
                            price={x.price}
                            discount={x.discount}
                            previewUrl={x.previewUrl}
                            rating={x.rating}
                            salesCount={x.salesCount}
                            isFavourite={x.isFavourite} />
                    )
                }
            })}
        </div>
    )
}