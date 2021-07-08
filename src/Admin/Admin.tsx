import React, {useEffect, useState} from 'react';
import {createClient} from '@supabase/supabase-js'
import './admin.scss'
import {keyHandler} from "../Services/keyHandler";
import {SingleCard} from "../Components/Product/SingleCard";
import {productType} from "../Components/Product/types";

const supabase = createClient('https://xhvnywjafhcirlskluzp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU5MjA4OSwiZXhwIjoxOTQxMTY4MDg5fQ.wmUD2lxoMGSRnK5gRaNpxUDVPOd5fH6C41GZdOm_at0')
// из-за айдишников в диспатчах не добавляются в вишлист и не происходит переход на SingleCard
// https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
export const Admin = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState('');
    const [salesCount, setSalesCount] = useState('');
    const [pathToURL, setPathToURL] = useState('');

    const [select, setSelected] = useState('select');
    const [optionsTitle, setOptionsTitle] = useState('color');
    const [trigger, setTrigger] = useState(true)
    const addType = (evt: any) => {
        setSelected(evt.target.value)
        setOptionsTitle(evt.target.value === 'select' ? 'color' : 'warranty')
        if (optionsTitle !== 'select') {
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
    const options = {type: select, title: optionsTitle, value: value.length === 0 ? false : value}
    const clickHandler = async () => {
        try {
            const {data, error} = await supabase
                .from('products2')
                .insert([
                    {
                        title: title,
                        category: category,
                        price: price,
                        discount: discount,
                        rating: rating,
                        salesCount: salesCount,
                        previewUrl: pathToURL,
                        options: [options]
                    }
                ])
            console.log('sent data =>', data)
        } catch (error) {
            console.log('error', error)
        }
    }
    const [products, setProducts] = useState<productType[] >([])
    const dataFetcher = async () => {
        try {
            const {data, error}: any = await supabase.from('products2').select()
            const preparedData = data?.map((product: any) => {
                return {...product, isFavourite: false, toBuy: false}
            })
            setProducts(preparedData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dataFetcher()
    }, [])
    console.log(products.map(item =>item.options?.map((a: any) => a.type)))
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
            <label className='admin-form__label'>URL
                <input className='admin-form__input' onChange={(evt) => setPathToURL(evt.target.value)} type='text'
                       value={pathToURL}/>
            </label>
            <div className='select-options'>Select options:
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
                    {colors.map((elem, index) => (
                        <label key={keyHandler(index)} className='admin-form__options-label'>{elem}
                            <input className='admin-form__options-input' onChange={valueHandler} type='checkbox'
                                   checked={value.includes(elem)}
                                   name={elem}/>
                        </label>
                    ))}
                </div>
                :
                <div>
                    Warranty is 'false' as default value
                </div>
            }
            <button
                disabled={trigger && value.length === 0}
                className={trigger && value.length === 0 ? 'admin-form__submit-button-disabled' : 'admin-form__submit-button'}
                type='button'
                onClick={clickHandler}
            >{trigger && value.length === 0 ? 'Cannot submit' : 'Submit'}
            </button>
            {/*<button*/}
            {/*    className='admin-form__submit-button'*/}
            {/*    type='button'*/}
            {/*    onClick={dataFetcher}*/}
            {/*>Data fetcher*/}
            {/*</button>*/}
        </form>
        <div>
            <h1>Rendering zone</h1>
            {products?.map((product, index)=> (
                <SingleCard
                    key={keyHandler(index)}
                    id={Number(keyHandler(index))}
                    category={product?.category}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    salesCount={product.salesCount}
                    previewUrl={product.previewUrl}
                    discount={product.discount}
                    isFavourite={product.isFavourite}
                    toBuy={product.toBuy}
                    options={product.options}
                />
            ))}
        </div>
    </div>
}
