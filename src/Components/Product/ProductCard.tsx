import React, { useState, useEffect } from 'react'
import { productType } from './types'
import './productCard.scss'
import StarPath from '../../img/ratingStar.svg'
import Like from '../../img/like.svg'

export const ProductCard = ({ title, price, previewUrl, rating, salesCount, discount, isFavourite, priceNoDiscount }: productType) => {

    const [totalPrice, setTotalPrice] = useState(price)
    const handlePriceCalculator = () => {
        setTotalPrice(prevState => {
            return Math.round(priceNoDiscount / ((discount / 100) + 1));
        });
    }

    const [isLiked, setIsLiked] = useState(isFavourite)
    const handleLikeChanger = () => {
        setIsLiked(prevState => !prevState)
    }

    useEffect(() => {
        handlePriceCalculator()
        console.log(handlePriceCalculator)
    }, [])


    return <div>
        <ul className='productCard'>
            <li className='productCard__PreviewUrl'>
                <img className='productCard__img' src={previewUrl}></img>
                <button
                    className={isLiked ? 'productCard__button' : 'productCard__button productCard__button--liked'}
                    type='button'
                    onClick={handleLikeChanger}
                >
                    {isFavourite}
                </button>
            </li>
            <li className='productCard__title'>{title}</li>
            <li className='productCard__Rating'>{[...Array(rating)].map(star => {
                return <img src={StarPath}></img>
            })}
                <span className='productCard__sold'>({salesCount} Sold out)</span>
            </li>
            <ul className='productCard__group'>
                <li className='productCard__Price'>${totalPrice}</li>
                <li className='productCard__priceNoDiscount'>${priceNoDiscount}</li>
                <li className='productCard__Discount'>-{discount}%</li>
            </ul>
        </ul>
    </div>
}