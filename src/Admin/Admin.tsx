import React, {useState} from 'react';
import {createClient} from '@supabase/supabase-js'
import './admin.scss'
import {products} from "../Components/Data/data";
import {SingleCard} from "../Components/Product/SingleCard";
import {productType} from "../Components/Product/types";
import {keyHandler} from "../Services/keyHandler";

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
                    {
                        title: title,
                        category: category,
                        price: price,
                        discount: discount,
                        rating: rating,
                        sold: salesCount,
                        previewUrl: pathToURL
                    }
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

    const [select, setSelected] = useState('select');
    const [optionsTitle, setOptionsTitle] = useState('color');
    const [trigger, setTrigger] = useState(true)
    const addType = (evt: any) => {
        setSelected(evt.target.value)
        setOptionsTitle(evt.target.value === 'select' ? 'color' : 'warranty')
        if(optionsTitle !== 'select') {
            setValue([])
            setTrigger(!trigger)
        }
    }
    const colors = ['black', 'white', 'grey'];
    const [value, setValue] = useState<any>([])

    const valueHandler = (evt: any) => {
        const {name} = evt.target;
        setValue((prevState: any) => {
            if (prevState.includes(name)) {
                return prevState.filter((element: any) => element !== name);
            } else {
                return [...prevState, name];
            }
        })
    }
    const options = {type: select, title: optionsTitle, value: value.length === 0? false : value}
    console.log('options: ', options)
    console.log(trigger)
    // options: [{type: 'select', title: 'color', value: ['black', 'white']}]
// options: [{type: 'boolean', title: 'warranty', value: true}]
    return <div className='admin-page'>
        <form className='admin-form'>Dear Admin, fill this product's form:
            <label className='admin-form__label'>Title
                <input className='admin-form__input' onChange={(evt) => setTitle(evt.target.value)} type='text'
                       value={title}/>
            </label>
            <label className='admin-form__label'>Category
                <input className='admin-form__input' onChange={(evt) => setCategory(evt.target.value)} type='text'
                       value={category}/>
            </label>
            <label className='admin-form__label'>Price
                <input className='admin-form__input' onChange={(evt) => setPrice(evt.target.value)} type='number'
                       value={price}/>
            </label>
            <label className='admin-form__label'>Discount
                <input className='admin-form__input' onChange={(evt) => setDiscount(evt.target.value)} type='number'
                       value={discount}/>
            </label>
            <label className='admin-form__label'>Rating
                <input className='admin-form__input' onChange={(evt) => setRating(evt.target.value)} type='number'
                       value={rating}/>
            </label>
            <label className='admin-form__label'>Sales count
                <input className='admin-form__input' onChange={(evt) => setSalesCount(evt.target.value)} type='number'
                       value={salesCount}/>
            </label>
            //
            https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
            <label className='admin-form__label'>URL
                <input className='admin-form__input' onChange={(evt) => setPathToURL(evt.target.value)} type='text'
                       value={pathToURL}/>
            </label>
            <div className='select-options'>Select options: {options.type}, {options.title}
                <label className='admin-form__options-label'>Color options
                    <input className='admin-form__options-input' onChange={addType} type='radio' value='select'
                           checked={select === 'select'}/>
                </label>
                <label className='admin-form__options-label'>Warranty options
                    <input className='admin-form__options-input' onChange={addType} type='radio' value='boolean'
                           checked={select === 'boolean'}/>
                </label>
            </div>
            {select === 'select' ?
                <div>
                    {colors.map((elem,index )=> (
                        <label key={keyHandler(index)} className='admin-form__options-label'>{elem}
                            <input className='admin-form__options-input' onChange={valueHandler} type='checkbox' checked={value.includes(elem)}
                                   name={elem}/>
                        </label>
                    ))}
                </div>
                :
                <div>
                    You've selected options: {options.type}, {options.title} {options.value === false ? 'false' : 'true'}
                </div>
            }
            <button
                disabled={trigger && value.length === 0}
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
