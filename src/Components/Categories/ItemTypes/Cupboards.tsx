import React from 'react';
import { ProductCard } from '../../Product/ProductCard'
import { Cupboards } from '../../Data/data'

export const ItemCupboard = () => {
    return (
        <div>
            {Object.values(Cupboards).map(item => {
                return <ProductCard
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                    previewUrl={item.previewUrl}
                    rating={item.rating}
                    salesCount={item.salesCount}
                    isFavourite={item.isFavourite}
                />
            })}
        </div>
    )
}