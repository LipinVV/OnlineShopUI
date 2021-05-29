import React, { useContext } from 'react';
import { productType } from './types';
import './product.scss';
import starIconUrl from './img/ratingStar.svg';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../App'


export const ProductCard = ({ id, category, title, price, previewUrl, rating, salesCount, discount = 0, isFavourite }: productType) => {
    const { state, dispatch } = useContext(StoreContext);
    const totalPrice: number = Math.ceil(price - ((discount / 100) * price));

    return (
        <div className='productCard__preview-wrapper'>
            <div className='productCard__PreviewUrl'>
                <img className='productCard__preview' src={previewUrl} alt='product-picture'></img>
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
                return <img src={starIconUrl} alt='rating-star'></img>
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



// last version
// return <div className='productCard__preview-wrapper'>
//         <div className='productCard__PreviewUrl'>
//             <img className='productCard__preview' src={previewUrl} alt='product-picture'></img>
//             <button
//                 className={isFavourite ? 'productCard__button productCard__button_liked' : 'productCard__button'}
//                 type='button'
//                 onClick={handleLikeChanger}
//             >
//                 {isFavourite}
//             </button>
//         </div>
//         <div className='productCard__title'>{title}</div>
//         <div className='productCard__rating'>{[...Array(rating)].map(star => {
//             return <img src={starIconUrl} alt='rating-star'></img>
//         })}
//             <span className='productCard__sold'>({salesCount} Sold out)</span>
//         </div>
//         <div className='productCard__group'>
//             {Boolean(priceNoDiscount) && <div className='productCard__priceNoDiscount'>${priceNoDiscount}</div>}
//             {Boolean(priceNoDiscount !== price) && <div className='productCard__price'>${price}</div>}
//             {Boolean(discount) && <div className='productCard__discount'>-{discount}%</div>}
//         </div>
//         <button className='productCard__details'><Link className='productCard__link' to={`/${category}/${id}`}>Details</Link></button>



{/* <div>
            {state.products.map(x => (
                <div className='productCard__preview-wrapper'>
                    <div className='productCard__PreviewUrl'>
                        <img className='productCard__preview' src={x.previewUrl} alt='product-picture'></img>
                        <button
                            className={x.isFavourite ? 'productCard__button productCard__button_liked' : 'productCard__button'}
                            type='button'
                            onClick={() => dispatch({ action: 'ADD_TO_WISHLIST', id: x.id })}
                        >
                            {x.isFavourite}
                        </button>
                    </div>
                    <div>{x.title}</div>
                    <div className='productCard__rating'>{[...Array(x.rating)].map(star => {
                        return <img src={starIconUrl} alt='rating-star'></img>
                    })}
                        <span className='productCard__sold'>({x.salesCount} Sold out)</span>
                    </div>
                    <div className='productCard__group'>
                        {Boolean(priceNoDiscount) && <div className='productCard__priceNoDiscount'>${priceNoDiscount}</div>}
                        {Boolean(priceNoDiscount !== x.price) && <div className='productCard__price'>${x.price}</div>}
                        {Boolean(x.discount) && <div className='productCard__discount'>-{x.discount}%</div>}
                    </div>
                    <button className='productCard__details'><Link className='productCard__link' to={`/${x.category}/${x.id}`}>Details</Link></button>
                </div>
            ))}
        </div> */}