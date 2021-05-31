import React, { useState, useContext } from 'react'
import { StoreContext } from '../../App';
import './shoppingCart.scss';
import { productType } from '../Product/types'


export const ShoppingCard = ({ id, title, price, previewUrl, options, discount = 0 }: productType) => {
    const { state, dispatch } = useContext(StoreContext)

    const [counter, setCounter] = useState(1);
    const countHandlerIncrementer = () => {
        setCounter(prevState => prevState + 1)
    }
    const countHandlerDecrementer = () => {
        setCounter(prevState => prevState <= 1 ? prevState = 1 : prevState - 1)
    }

    const totalPrice: number = Math.ceil(price - ((discount / 100) * price));

    return (
        <div className='shopping-card'>
            <div className='shopping-card__img'><img className='single-card__img-preview' src={previewUrl} alt='product'></img></div>
            <div className='shopping-card__title'>{title}</div>
            <div className='shopping-card__counter'>
                <p className='shopping-card__quantity'>Quantity</p>
                <div className='shopping-card__controls'>
                    <button className='shopping-card__btn-minus' type='button' onClick={countHandlerDecrementer}></button>
                    <input className='shopping-card__input' type='number' value={counter}></input>
                    <button className='shopping-card__btn-plus' type='button' onClick={countHandlerIncrementer}></button>
                </div>
            </div>
            {Boolean(options?.length) && <p>{options?.map(option => {
                if (option.type === 'select') {
                    return (
                        <div className='shopping-card__colors'>
                            <label className='shopping-card__label'>{option.title[0].toUpperCase() + option.title.slice(1)}</label>
                            {Array.isArray(option.value) &&
                                <select className='shopping-card__select'>{option.value.map(value =>
                                    <option className='shopping-card__option'>{value[0].toUpperCase() + value.slice(1)}</option>
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
                                <input checked={option.value} type='checkbox'/>
                            }
                        </div>
                    )
                }
            })}</p>}
            <div className='shopping-card__price-title'>Price
            {Boolean(totalPrice) && <div className='shopping-card__price'>${totalPrice}</div>}
            </div>
            <div>
                <button type='button' onClick={() => dispatch({ action: "REMOVE" })}>Remove</button>
            </div>
        </div>
    )
}