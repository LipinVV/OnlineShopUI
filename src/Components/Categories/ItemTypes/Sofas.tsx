import React from 'react';
import { ProductCard } from '../../Product/ProductCard'
import { Sofas } from '../../Data/data'

export const ItemSofa = () => {
    return (
        <div>
            {Object.values(Sofas).map(item => {
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