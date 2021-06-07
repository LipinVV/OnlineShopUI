import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { productType } from '../../Product/types';
import { getProductsByCategory, Products } from '../../Data/data';
import { ProductCard } from '../../Product/ProductCard';
import './categoryPage.scss';
import { StoreContext } from '../../../App'

export const CategoryPage = () => {
    const { state, dispatch } = useContext(StoreContext)
    const parameters = useParams<{ id: string, category: string }>();
    return (
        <div className='categoryPage'>
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