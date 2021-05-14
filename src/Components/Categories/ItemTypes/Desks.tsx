import React from 'react';
import { ProductCard } from '../../Product/ProductCard'
import { Desks } from '../../Data/data'

export const ItemDesk = () => {
    return (
        <div>
            {Object.values(Desks).map(item => {
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