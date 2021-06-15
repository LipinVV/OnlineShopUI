import React, { useContext } from 'react';
import { productType } from './types';
import './product.scss';
import starIconUrl from './img/ratingStar.svg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../App'
import {keyHandler} from "../../Services/key-handler";


export const ProductCard = ({ id, category, title, price, previewUrl, rating, salesCount, discount = 0, isFavourite }: productType) => {
    const { dispatch } = useContext(StoreContext);
    const totalPrice: number = Math.ceil(price - ((discount / 100) * price));
    const styles = {
        'backgroundImage': `url(${previewUrl})`
    }
    return (
        <div className='productCard__preview-wrapper'>
            <div className='productCard__PreviewUrl' style={styles}>
                <button
                    className={isFavourite ? 'productCard__button productCard__button_liked' : 'productCard__button'}
                    type='button'
                    onClick={() => dispatch({ action: 'ADD_TO_WISHLIST', productId: id })}
                >
                    {isFavourite}
                </button>
            </div>
            <div className='productCard__title'>{title}</div>
            <div className='productCard__rating'>{[...Array(rating)].map(star => {
                return <img id={keyHandler(rating)} src={starIconUrl} alt='rating-star'></img>
            })}
                <span className='productCard__sold'>({salesCount} Sold out)</span>
            </div>
            <div className='productCard__group'>
                {Boolean(totalPrice) && <div className='productCard__totalPrice'>${totalPrice}</div>}
                {Boolean(totalPrice !== price) && <div className='productCard__price'>${price}</div>}
                {Boolean(discount) && <div className='productCard__discount'>-{discount}%</div>}
            </div>
            <button className='productCard__details'><Link className='productCard__link' to={`/${category}/${id}`}>Details</Link></button>
        </div>
    )
}
