import React, { useContext } from 'react';
import { StoreContext } from '../../App'
import { ProductCard } from '../Product/ProductCard';

export const Wishlist = () => {
    // @ts-ignore
    const {state, dispatch} = useContext(StoreContext)

    return (
        // @ts-ignore
        <div>
            Your WishList is below:
            
            <div>
             {Object.values(state.products).map(x => {
                 if(!x.isFavourite) {
                     return (
                        <ProductCard 
                        id = {x.id}
                        category={x.category}
                        title={x.title}
                        price={x.price}
                        discount={x.discount}
                        previewUrl={x.previewUrl}
                        rating={x.rating}
                        salesCount={x.salesCount}
                        isFavourite={x.isFavourite}/>
                    )}
                })}
            </div>
        </div>
    )
}