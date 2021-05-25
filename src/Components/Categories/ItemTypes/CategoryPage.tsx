import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { productType } from '../../Product/types';
import { getProductsByCategory, products } from '../../Data/data';
import { ProductCard } from '../../Product/ProductCard';
import './categoryPage.scss';
import { StoreContext } from '../../../App'

export const CategoryPage = () => {
    //@ts-ignore
    const { state, dispatch } = useContext(StoreContext)
    const parameters = useParams<{ id: string, category: string }>();
    // const product: productType | undefined = products.find(product => product.category === parameters.category) - ???
    console.log('CategoryPage', state)
    return (
        <div className='categoryPage'>
            {Object.values(getProductsByCategory(parameters.category, state.products)).map(item => {
                return <ProductCard
                    id={item.id}
                    category={item.category}
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                    previewUrl={item.previewUrl}
                    rating={item.rating}
                    salesCount={item.salesCount}
                    isFavourite={item.isFavourite}
                />
            })}
        </div>
    )
}