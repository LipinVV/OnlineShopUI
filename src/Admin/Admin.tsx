import React, {useState} from 'react';
import {createClient} from '@supabase/supabase-js'
import './admin.scss'
const supabase = createClient('https://xhvnywjafhcirlskluzp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU5MjA4OSwiZXhwIjoxOTQxMTY4MDg5fQ.wmUD2lxoMGSRnK5gRaNpxUDVPOd5fH6C41GZdOm_at0')


export const Admin = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState('');
    const [salesCount, setSalesCount] = useState('');

    const clickHandler = async () => {
        const {data, error} = await supabase
            .from('products')
            .insert([
                {title: title, category: category, price: price, discount: discount, rating: rating, salesCount: salesCount}
            ])
        console.log('data', data, 'error', error)
    }

    const [inputValue, setInputValue] = useState("")
    const inputHandler = (evt: any) => {
        const {value} = evt.target;
        setInputValue(prevState => value)
    }

    return <div className='admin-page'>
        <form className='admin-form'>Dear Admin, fill this product's form:
            <label className='admin-form__label'>Title
                <input className='admin-form__input' onChange={(evt) => setTitle(evt.target.value)} type='text' value={title}/>
            </label>
            <label className='admin-form__label'>Category
                <input className='admin-form__input' onChange={(evt) => setCategory(evt.target.value)} type='text' value={category}/>
            </label>
            <label className='admin-form__label'>Price
                <input className='admin-form__input' onChange={(evt) => setPrice(evt.target.value)} type='number' value={price}/>
            </label>
            <label className='admin-form__label'>Discount
                <input className='admin-form__input' onChange={(evt) => setDiscount(evt.target.value)} type='number' value={discount}/>
            </label>
            <label className='admin-form__label'>Rating
                <input className='admin-form__input' onChange={(evt) => setRating(evt.target.value)} type='number' value={rating}/>
            </label>
            <label className='admin-form__label'>Sales count
                <input className='admin-form__input' onChange={(evt) => setSalesCount(evt.target.value)} type='number' value={salesCount}/>
            </label>
            <button
                className='admin-form__submit-button'
                type='button'
                onClick={clickHandler}
            >Submit
            </button>
        </form>

    </div>
}