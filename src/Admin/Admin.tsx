import React, {useState} from 'react';
import {createClient} from '@supabase/supabase-js'
import './admin.scss'
import {products} from "../Components/Data/data";
import {SingleCard} from "../Components/Product/SingleCard";
import {productType} from "../Components/Product/types";
const supabase = createClient('https://xhvnywjafhcirlskluzp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU5MjA4OSwiZXhwIjoxOTQxMTY4MDg5fQ.wmUD2lxoMGSRnK5gRaNpxUDVPOd5fH6C41GZdOm_at0')

export const Admin = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState('');
    const [salesCount, setSalesCount] = useState('');
    const [pathToURL, setPathToURL] = useState('');

    const clickHandler = async () => {
        try {
            const {data, error} = await supabase
                .from('products')
                .insert([
                    {title: title, category: category, price: price, discount: discount, rating: rating, sold: salesCount, previewUrl: pathToURL}
                ])
            console.log('sent data =>', data)
        } catch (error) {
            console.log('error', error)
        }
    }
    const [products, setProducts] = useState<productType[]>([])
    const dataFetcher = async () => {
        try {
            const {data, error}: any = await supabase.from('products').select()
            const preparedData = data?.map((product: any) => {
                return {...product, isFavourite: false, toBuy: false}
            })
            setProducts(preparedData)
        } catch (error) {
            console.log(error)
        }
    }
    console.log('products', products)
    // @ts-ignore
    // @ts-ignore
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
            // https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
            <label className='admin-form__label'>URL
                <input className='admin-form__input' onChange={(evt) => setPathToURL(evt.target.value)} type='text' value={pathToURL}/>
            </label>
            <button
                className='admin-form__submit-button'
                type='button'
                onClick={clickHandler}
            >Submit
            </button>
            <button
                className='admin-form__submit-button'
                type='button'
                onClick={dataFetcher}
            >Data fetcher
            </button>
        </form>
        <div>
            <h1>Rendering zone</h1>
            {products?.map(product => (
                <SingleCard
                id={product.id}
                category={product?.category}
                title={product.title}
                price={product.price}
                rating={product.rating}
                salesCount={product.salesCount}
                previewUrl={product.previewUrl}
                discount={product.discount}
                isFavourite={product.isFavourite}
                toBuy={product.toBuy}
                />
            ))}
        </div>
    </div>
}

// options: [{type: 'select', title: 'color', value: ['black', 'white']}]
// options: [{type: 'boolean', title: 'warranty', value: true}]