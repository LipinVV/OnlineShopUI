import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { Products } from '../Data/data';
import { SingleCard } from './SingleCard';
import { productType } from './types';

export const ProductPage = () => {

    const parameters = useParams<{ id: string, category: string }>();
    const product: productType | undefined = Products.find(product => product.id.toString() === parameters.id)

    return (
        <div className='product-page'>
            {product && <SingleCard id={product.id} category={product.category} title={product.title} price={product.price} previewUrl={product.previewUrl} rating={product.rating}
                salesCount={product.salesCount} discount={product.discount} isFavourite={product.isFavourite} toBuy={product.toBuy} options={product.options}/>}
        </div>
    )
}