import React, {useContext, useState, useEffect} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import {productType} from './types'
import starIconUrl from './img/ratingStar.svg'
import {ACTION, StoreContext} from '../../App'
import {keyHandler} from "../../Services/keyHandler";
import {getFullName} from "../../Services/naming";

export const SingleCard = ({id, title, price, previewUrl, rating, salesCount, options, discount = 0}: productType) => {
    const history = useHistory();
    const {state, dispatch} = useContext(StoreContext);
    const [counter, setCounter] = useState(1);

    const countHandlerIncrementer = () => {
        setCounter(counter + 1)
    }
    const countHandlerDecrementer = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }
    const totalPrice: number = Math.ceil(price - ((discount / 100) * price));

    const isExistInCart = state.cart.some(element => element.id === id);
    const productHandler = state.cart.find(item => item.id === id) // экземляр массива

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (productHandler) {
            setCounter(productHandler.quantity)
        }
    }, [productHandler]) // глобальный IF

    const [popUp, setPopUp] = useState(0)
    const clickHandler = () => {
        setPopUp(popUp + 1)
    }

    const [warranty, setWarranty] = useState(true);
    const warrantyHandler = () => {
        setWarranty(prevState => !prevState)
    }

    return (
        <div className='single-card'>
            <div className='single-card__header'>Product Detail</div>
            <div className='single-card__details'>
                <ul className='single-card__photos'>
                    <li className='single-card__img'>
                        <img className='single-card__img-preview' src={previewUrl} alt='product'></img>
                    </li>
                    <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}
                                                          alt='product'></img></li>
                    <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}
                                                          alt='product'></img></li>
                    <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}
                                                          alt='product'></img></li>
                    <li className='single-card__img'><img className='single-card__img-preview' src={previewUrl}
                                                          alt='product'></img></li>
                </ul>

                <ul className='single-card__main' key={title}>
                    <li className='single-card__title'>{title}</li>
                    <li className='single-card__description'>Knitted by the professional hands of housewives. Making a
                        masterpiece of the best furniture in the world. Very handy and comfortable
                    </li>
                    <li key={keyHandler(rating)}
                        className='single-card__rating'>{[...Array(rating)].map((star, index) => {
                        return <img key={keyHandler(rating)} src={starIconUrl} alt='rating-star'></img>
                    })}
                        <span className='single-card__sold'>({salesCount} Sold out)</span>
                    </li>
                    <li className='single-card__price'>${totalPrice}</li>
                    {Boolean(options?.length) && <div>{options?.map(option => {
                        if (option.type === 'select') {
                            return (
                                <div className='single-card__colors' key={keyHandler(id)}>
                                    <label className='single-card__label'>{option.title[0].toUpperCase() + option.title.slice(1)}</label>
                                    {Array.isArray(option.value) &&
                                    <select
                                        onChange={(evt) => {
                                            const {value} = evt.target
                                            if (isExistInCart) {
                                                dispatch({
                                                    action: ACTION.CHOOSE_PRODUCT_COLOR,
                                                    data: {productColor: value}
                                                })
                                            }
                                        }
                                        }
                                        className='single-card__select'>{option.value.map(value =>
                                        <option value={value} className='single-card__option'
                                                key={keyHandler(id)}>{getFullName(value)}</option>
                                    )}</select>
                                    }
                                </div>
                            )
                        }
                        if (option.type === 'boolean') {
                            return (
                                <label key={keyHandler(rating)} className='single-card__warranty'>{getFullName(option.title)}
                                    {typeof option.value === 'boolean' &&
                                    <input key={keyHandler(rating)} checked={warranty} onChange={warrantyHandler} type='checkbox'/>
                                    }
                                </label>
                            )
                        }
                    })}
                    </div>
                    }
                    <div className='single-card__counter'>
                        <p className='single-card__quantity'>Quantity</p>
                        <div className='single-card__controls'>
                            <button className='single-card__btn-minus' type='button'
                                    onClick={countHandlerDecrementer}></button>
                            <input className='single-card__input' type='number' value={counter}
                                   onChange={() => console.log(counter)}></input>
                            <button className='single-card__btn-plus' type='button'
                                    onClick={countHandlerIncrementer}></button>
                        </div>
                    </div>
                    <div className='single-card__interactions'>
                        <button
                            type='button'
                            className='single-card__btn-add-to-buy'
                            onClick={() => {
                                if (isExistInCart) {
                                    dispatch({
                                        action: ACTION.INCREMENT_QUANTITY,
                                        data: {
                                            productId: id
                                        } // чтобы знать каком продукту в массиве card провести increment значения quantity
                                    })
                                    clickHandler()
                                } else {
                                    clickHandler()
                                    dispatch({
                                        action: ACTION.ADD_TO_BUY,
                                        data: {
                                            product: {
                                                id,
                                                title,
                                                price,
                                                previewUrl,
                                                rating,
                                                salesCount,
                                                options,
                                                discount,
                                                quantity: counter
                                            } // данные для модификации store
                                        }
                                    })
                                }
                            }
                            }
                        >
                            Add to Cart
                            <div
                                className={popUp <= 0 ? 'single-card__pop-up' : 'single-card__pop-up-increment'}>Added
                                to cart: {popUp}</div>
                        </button>
                        <button
                            type='button'
                            className='single-card__btn-add-to-wish'
                            onClick={() => dispatch({action: ACTION.ADD_TO_WISHLIST, data: {productId: id}})}
                        >
                            Add to Wishlist
                        </button>
                    </div>
                    <button onClick={() => history.goBack()} className='single-card__btn-close'>Close card
                    </button>
                </ul>
            </div>
        </div>
    )
}
