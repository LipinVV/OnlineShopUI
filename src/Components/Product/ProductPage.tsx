import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { products } from '../Data/data';
import { SingleCard } from './SingleCard';
import { productType } from './types';

export const ProductPage = () => {

    const parameters = useParams<{ id: string, category: string }>();
    const product: productType | undefined = products.find(product => product.id.toString() === parameters.id)

    return (
        <div className='productPage'>
            {product && <SingleCard id={product.id} category={product.category} title={product.title} price={product.price} previewUrl={product.previewUrl} rating={product.rating}
                salesCount={product.salesCount} discount={product.discount} isFavourite={product.isFavourite} />}
        </div>
    )
}