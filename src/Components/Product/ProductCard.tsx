import React, { useState, useEffect } from 'react'
import { productType } from './types'
import './productCard.css'
import StarPath from '../../img/ratingStar.svg'

export const ProductCard = ({ title, price, previewUrl, rating, salesCount, discount, isFavourite, priceNoDiscount }: productType) => {

    const [totalPrice, setTotalPrice] = useState(price)
    const handlePriceCalculator = () => {
        setTotalPrice(prevState => {
            return Math.round(priceNoDiscount / ((discount / 100) + 1));
        });
    }

    useEffect(() => {
        handlePriceCalculator()
        console.log(handlePriceCalculator)
    }, [])
    

    return <div>
        <ul className='productCard'>
            <li className='productCard__PreviewUrl'>{previewUrl}</li>
            <li className='productCard__IsFavourite'>
                <button type='button' hidden>
                    Like {isFavourite}
                </button>
            </li>
            <li className=''>{title}</li>
            <li className='productCard__Rating'>{[...Array(rating)].map(star => {
                return <img src={StarPath}></img>
            })} {salesCount}</li>
            <ul className='productCard__group'>
                <li className='productCard__Price'>${totalPrice}</li>
                <li className='productCard__priceNoDiscount'>${priceNoDiscount}</li>
                <li className='productCard__Discount'>-{discount}%</li>
            </ul>
        </ul>
    </div>


}