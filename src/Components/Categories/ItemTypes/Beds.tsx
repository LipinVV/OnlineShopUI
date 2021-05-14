import React from 'react';
import { ProductCard } from '../../Product/ProductCard'
import { Beds } from '../../Data/data'

export const ItemBed = () => {
    return (
        <div>
            {Object.values(Beds).map(item => {
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