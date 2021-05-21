import React, { useState, useEffect } from 'react';
import { productType } from './types';
import './product.scss';
import starIconUrl from './img/ratingStar.svg';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export const ProductCard = ({ id, category, title, price, previewUrl, rating, salesCount, discount = 0, isFavourite }: productType) => {

    const [isLiked, setIsLiked] = useState<boolean>(isFavourite) // <- просмотр типа сущности
    const handleLikeChanger = () => {
        setIsLiked(prevState => !prevState)
    }

    const priceNoDiscount: number = Math.ceil(price - ((discount / 100) * price));

    return <div className='productCard__preview-wrapper'>
        <div className='productCard__PreviewUrl'>
            <img className='productCard__preview' src={previewUrl} alt='product-picture'></img>
            <button
                className={isLiked ? 'productCard__button productCard__button_liked' : 'productCard__button'}
                type='button'
                onClick={handleLikeChanger}
            >
                {isFavourite}
            </button>
        </div>
        <div className='productCard__title'>{title}</div>
        <div className='productCard__rating'>{[...Array(rating)].map(star => {
            return <img src={starIconUrl} alt='rating-star'></img>
        })}
            <span className='productCard__sold'>({salesCount} Sold out)</span>
        </div>
        <div className='productCard__group'>
            {Boolean(priceNoDiscount) && <div className='productCard__priceNoDiscount'>${priceNoDiscount}</div>}
            <div className='productCard__price'>${price}</div>
            {Boolean(discount) && <div className='productCard__discount'>-{discount}%</div>}
        </div>
        <button className='productCard__details'><Link className='productCard__link' to={`/${category}/${id}`}>Details</Link></button>
    </div>
} // : даёт информация о том, как будет называться переменная в адресной строке
