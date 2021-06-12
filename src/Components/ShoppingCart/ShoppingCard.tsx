import React, { useState, useContext } from 'react'
import {CartProductInterface} from '../ShoppingCart/types'
import {ACTION, StoreContext} from '../../App';
import './shoppingCart.scss';
import {getTotalPriceForProduct} from "../../Services/products";

interface ShoppingCardProps {
    product: CartProductInterface
}
export const ShoppingCard = ({ product }: ShoppingCardProps) => {
    const {state, dispatch } = useContext(StoreContext)
    const countHandlerIncrementer = () => {
        dispatch({action: ACTION.INCREMENT_QUANTITY, productId: product.id})
    }
    const countHandlerDecrementer = () => {
        dispatch({action: ACTION.DECREMENT_QUANTITY, productId: product.id})
    }

    const totalPrice: number = getTotalPriceForProduct(product)
    const isExistInCart = state.cart.some(element => element.id === product.id);
    return (
        <div className='shopping-card'>
            <div className='shopping-card__img'><img className='shopping-card__img-preview' src={product.previewUrl} alt='product'></img></div>
            <div className='shopping-card__title'>{product.title}</div>
            <div className='shopping-card__counter'>
                <p className='shopping-card__quantity'>Quantity</p>
                <div className='shopping-card__controls'>
                    <button className='shopping-card__btn-minus' type='button' onClick={countHandlerDecrementer}></button>
                    <input className='shopping-card__input' type='number' value={product.quantity}></input>
                    <button className='shopping-card__btn-plus' type='button' onClick={countHandlerIncrementer}></button>
                </div>
            </div>
            {Boolean(product.options?.length) && <p>{product.options?.map(option => {
                if (option.type === 'select') {
                    return (
                        <div className='shopping-card__colors' key={product.id}>
                            <label className='shopping-card__label'>{option.title[0].toUpperCase() + option.title.slice(1)}</label>
                            {Array.isArray(option.value) &&
                            <select
                                onChange={(evt) => {
                                    const {value} = evt.target
                                    if(isExistInCart) {
                                        dispatch({
                                            action: ACTION.CHOOSE_PRODUCT_COLOR,
                                            productColor: value
                                        })}
                                }
                                }
                                className='shopping-card__select'>{option.value.map(value =>
                                <option value={value} className='single-card__option' key={product.id}>{value[0].toUpperCase() + value.slice(1)}</option>
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
            {Boolean(totalPrice) && <div className='shopping-card__price'>${totalPrice * product.quantity}</div>}
            </div>
            <div>
                <button type='button' onClick={() => dispatch({ action: ACTION.REMOVE, productId: product.id })}>Remove</button>
            </div>
        </div>
    )
}