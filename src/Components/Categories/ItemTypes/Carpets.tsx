import React from 'react';
import { ProductCard } from '../../Product/ProductCard'
import { Carpets } from '../../Data/data'

export const ItemCarpet = () => {
    return (
        <div>
            {Object.values(Carpets).map(item => {
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