import React, {useContext} from 'react'
import {CartProductInterface} from '../ShoppingCart/types'
import {ACTION, StoreContext} from '../../App';
import './shoppingCart.scss';
import {getTotalPriceForProduct} from "../../services/products";
import {keyHandler} from "../../services/keyHandler";
import {getFullName} from "../../services/naming";

interface ShoppingCardProps {
    product: CartProductInterface
}
export const ShoppingCard = ({ product }: ShoppingCardProps) => {
    const {state, dispatch } = useContext(StoreContext)
    const countHandlerIncrementer = () => {
        dispatch({action: ACTION.INCREMENT_QUANTITY, data: {productId: product.id}})
    }
    const countHandlerDecrementer = () => {
        dispatch({action: ACTION.DECREMENT_QUANTITY, data: {productId: product.id}})
    }

    const totalPrice: number = getTotalPriceForProduct(product)
    const isExistInCart = state.cart.some(element => element.id === product.id);

    return (
        <div className='shopping-card' key={keyHandler(product.id)} >
            <div className='shopping-card__img'><img className='shopping-card__img-preview' src={product.previewUrl} alt='product'></img></div>
            <div className='shopping-card__title'>{product.title}</div>
            <div className='shopping-card__counter'>
                <div className='shopping-card__quantity'>Quantity</div>
                <div className='shopping-card__controls'>
                    <button className='shopping-card__btn-minus' type='button' onClick={countHandlerDecrementer}></button>
                    <input className='shopping-card__input' type='number' value={product.quantity}></input>
                    <button className='shopping-card__btn-plus' type='button' onClick={countHandlerIncrementer}></button>
                </div>
            </div>
            {Boolean(product.options?.length) && <div className='shopping-card__options'>{product.options?.map(option => {
                if (option.type === 'select') {
                    return (
                        <div className='shopping-card__colors' key={keyHandler(product.id)}>
                            <label className='shopping-card__label'>{option.title[0].toUpperCase() + option.title.slice(1)}</label>
                            {Array.isArray(option.value) &&
                            <select
                                onChange={(evt) => {
                                    const {value} = evt.target
                                    if(isExistInCart) {
                                        dispatch({
                                            action: ACTION.CHOOSE_PRODUCT_COLOR,
                                            data: {productColor: value}
                                        })}
                                }
                                }
                                className='shopping-card__select'>{option.value.map(value =>
                                <option value={value} className='single-card__option' key={keyHandler(product.id)}>{value[0].toUpperCase() + value.slice(1)}</option>
                            )}</select>
                            }
                        </div>
                    )
                }
                if (option.type === 'boolean') {
                    return (
                        <div className='shopping-card__warranty' key={keyHandler(product.id)} >
                            <span>{getFullName(option.title)}</span>
                            {typeof option.value === 'boolean' &&
                                <input checked={option.value} type='checkbox'/>
                            }
                        </div>
                    )
                }
            })}</div>}
            <div className='shopping-card__price-title'>Price
            {Boolean(totalPrice) && <div className='shopping-card__price'>${totalPrice * product.quantity}</div>}
            </div>
                <button className='shopping-card__remove-item' type='button' onClick={() => dispatch({ action: ACTION.REMOVE, data: {productId: product.id}})}></button>
        </div>
    )
}