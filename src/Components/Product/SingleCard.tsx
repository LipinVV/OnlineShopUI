import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { productType } from './types'
import starIconUrl from './img/ratingStar.svg'

export const SingleCard = ({ category, title, price, previewUrl, rating, salesCount }: productType) => {
    // const { id } = useParams<{ id: string }>();
    return (
        <div className='single-card'>
            <ul className='single-card__photos'>
                <li className='single-card__img'><img className='single-card__img-preview-main' src={previewUrl}></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}></img></li>
            </ul>

            <ul className='single-card__main' key={title}>
                <li className='single-card__title'>{title}</li>
                <li className='single-card__description'>Knitted by the professional hands of housewives. Making a masterpiece of the best furniture in the world. Very handy and comfortable</li>
                <li className='single-card__rating'>{[...Array(rating)].map(star => {
                    return <img src={starIconUrl}></img>
                })}
                    <span className='single-card__sold'>({salesCount} Sold out)</span>
                </li>
                <li className='single-card__price'>${price}</li>
                <label className='single-card__label'>Color</label>
                <div className='single-card__counter'>
                    <p className='single-card__quantity'>Quantity</p>
                    <button>-</button>
                    <input className='single-card__input' type='number'></input>
                    <button>+</button>
                </div>
                <div className='single-card__interactions'>
                    <button type='button' className='single-card__btn-add-to-buy'>Add to Cart</button>
                    <button type='button' className='single-card__btn-add-to-wish'>Add to Wishlist</button>
                </div>
                <button className='single-card__btn-close'>
                    <Link className='single-card__link-close' to='/categories'>Close card</Link>
                </button>
            </ul>
        </div>
    )
}