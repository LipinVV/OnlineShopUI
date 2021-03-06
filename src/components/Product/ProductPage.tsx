import React, {useContext, useEffect} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import {StoreContext} from "../../App";
import { SingleCard } from './SingleCard';
import { productType } from './types';

export const ProductPage = () => {
    const { state } = useContext(StoreContext)
    const parameters = useParams<{ id: string, category: string }>();
    const product: productType | undefined = state.products.find(product => product.id === Number(parameters.id))
    return (
        <div className='product-page'>
            {product && <SingleCard id={product.id} category={product.category} title={product.title} price={product.price} previewUrl={product.previewUrl} rating={product.rating}
                salesCount={product.salesCount} discount={product.discount} isFavourite={product.isFavourite} toBuy={product.toBuy} options={product.options}/>}
        </div>
    )
}