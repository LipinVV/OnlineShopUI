import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { productType } from './types'
import starIconUrl from './img/ratingStar.svg'

export const SingleCard = ({id, category, title, price, previewUrl, rating, salesCount, options, isFavourite }: productType) => {
    // const { id } = useParams<{ id: string }>();
    const history = useHistory();

    return (
        <div className='single-card'>
            <ul className='single-card__photos'>
                <li className='single-card__img'><img className='single-card__img-preview-main' src={previewUrl} alt='product'></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl} alt='product'></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl} alt='product'></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl} alt='product'></img></li>
                <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl} alt='product'></img></li>
            </ul>

            <ul className='single-card__main' key={title}>
                <li className='single-card__title'>{title}</li>
                <li className='single-card__description'>Knitted by the professional hands of housewives. Making a masterpiece of the best furniture in the world. Very handy and comfortable</li>
                <li className='single-card__rating'>{[...Array(rating)].map((star, index) => {
                    return <img key={id} src={starIconUrl} alt='rating-star'></img>
                })}
                    <span className='single-card__sold'>({salesCount} Sold out)</span>
                </li>
                <li className='single-card__price'>${price}</li>
                <label className='single-card__label'>Color</label>
                {Boolean(options?.length) && <p>{options?.map(option => {
                    if (option.type === 'select') {
                        return (
                            <div>
                                <span>{option.title}</span>
                                {Array.isArray(option.value) &&
                                    <select>{option.value.map(value =>
                                        <option>{value}</option>
                                    )}</select>
                                }
                            </div>
                        )
                    }
                    if (option.type === 'boolean') {
                        return (
                            <div>
                                <span>{option.title}</span>
                                {typeof option.value === 'boolean' &&
                                    <input checked={option.value} type='checkbox' />
                                }
                            </div>
                        )
                    }
                })}</p>}
                <div className='single-card__counter'>
                    <p className='single-card__quantity'>Quantity</p>
                    <button>-</button>
                    <input className='single-card__input' type='number'></input>
                    <button>+</button>
                </div>
                <div className='single-card__interactions'>
                    <button type='button' className='single-card__btn-add-to-buy'>Add to Cart</button>
                    <button type='button' className='single-card__btn-add-to-wish'

                    >Add to Wishlist</button>
                </div>
                <button onClick={() => history.goBack()} className='single-card__btn-close'>Close card
                </button>
            </ul>
        </div>
    )
}

// key -> to all array.map
// new component Options with props