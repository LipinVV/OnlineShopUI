import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { productType } from './types'
import starIconUrl from './img/ratingStar.svg'

export const SingleCard = ({ title, price, previewUrl, rating, salesCount }: productType) => {
    // const { id } = useParams<{ id: string }>();
    return (
        <div className='single-card'>
            <img className='single-card__img-preview' src={previewUrl}></img>

            <ul className='single-card__main' key={title}>
                {/* <h1>ID: {id}</h1> */}
                <li className='single-card__title'>{title}</li>
                <li className='single-card__description'>There is some text here</li>
                <li className='single-card__rating'>{[...Array(rating)].map(star => {
                    return <img src={starIconUrl}></img>
                })}
                    <span className='single-card__sold'>({salesCount} Sold out)</span>
                </li>
                <li className='single-card__price'>{price}</li>
                <label>Color</label>
                <div className='single-card__counter'>
                    <p>Quantity</p>
                    <button>-</button>
                    <input className='single-card__input' type='number'></input>
                    <button>+</button>
                </div>
                <button className='single-card__btn-add-to-buy'>Add to Cart</button>
                <button className='single-card__btn-add-to-wish'>Add to Wishlist</button>
                <button className='single-card__btn-close'>
                    <Link className='single-card__link-close' to='/categories'>Close card</Link>
                </button>
            </ul>
        </div>
    )
}