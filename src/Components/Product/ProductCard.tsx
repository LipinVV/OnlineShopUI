import React, { useState, useEffect } from 'react'
import { productType } from './types'
import './productCard.scss'
import StarPath from '../../img/ratingStar.svg'

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
    }, [])


    return <div>
        <ul className='productCard'>
            <li className='productCard__PreviewUrl'>
                <img className='productCard__img' src={previewUrl}></img>
                <button
                    className={isLiked ? 'productCard__button productCard__button_liked' : 'productCard__button'}
                    type='button'
                    onClick={handleLikeChanger}
                >
                    {isFavourite}
                </button>
            </li>
            <li className='productCard__title'>{title}</li>
            <li className='productCard__rating'>{[...Array(rating)].map(star => {
                return <img src={StarPath}></img>
            })}
                <span className='productCard__sold'>({salesCount} Sold out)</span>
            </li>
            <ul className='productCard__group'>
                <li className='productCard__price'>${totalPrice}</li>
                <li className='productCard__priceNoDiscount'>${priceNoDiscount}</li>
                <li className='productCard__discount'>-{discount}%</li>
            </ul>
        </ul>
    </div>
}