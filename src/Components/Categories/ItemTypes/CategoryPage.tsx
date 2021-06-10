import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../Data/data';
import { ProductCard } from '../../Product/ProductCard';
import './categoryPage.scss';
import { StoreContext } from '../../../App'
import {getFullProductName} from "../../../Services/naming";

export const CategoryPage = () => {
    const { state } = useContext(StoreContext)
    const parameters = useParams<{ id: string, category: string }>();
    return (
        <div className='categoryPage'>
            <div className='categoryPage__header'>
                <h1 className='categoryPage__name'>{getFullProductName(parameters)}</h1>
                <div className='categoryPage__seeProducts'>See All</div>
            </div>
            {getProductsByCategory(parameters.category, state.products).map(product => (
                <ProductCard
                    id={product.id}
                    category={product.category}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                    previewUrl={product.previewUrl}
                    rating={product.rating}
                    salesCount={product.salesCount}
                    isFavourite={product.isFavourite}
                    toBuy={product.toBuy}
                />
            ))}
        </div>
    )
}