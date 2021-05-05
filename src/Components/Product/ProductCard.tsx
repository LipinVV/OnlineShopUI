import React from 'react'
import { productType } from './types'


export const ProductCard = ({ title, price, previewUrl, rating, salesCount, discount, isFavourite }: productType) => {

    return <div>ProductCard
        <ul>{title}
            <li>{price}</li>
            <li>{previewUrl}</li>
            <li>{rating}</li>
            <li>{salesCount}</li>
            <li>{discount}</li>
            <li>{isFavourite}</li>
        </ul>
        </div>


}