import React, {useContext, useEffect} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import {getProductsByCategory} from '../../Data/data';
import {ProductCard} from '../../Product/ProductCard';
import './categoryPage.scss';
import {StoreContext} from '../../../App'
import {keyHandler} from "../../../Services/keyHandler";
import {getFullName} from "../../../Services/naming";

export const CategoryPage = () => {
    const {state} = useContext(StoreContext)
    const parameters = useParams<{ id: string, category: string }>();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='categoryPage'>
            <h1 className='categoryPage__header'>
                <div className='categoryPage__info'>
                    <div className='categoryPage__name'>{getFullName(parameters.category)}</div>
                    <div className='categoryPage__seeProducts'>See All</div>
                </div>
            </h1>
            {getProductsByCategory(parameters.category, state.products).map(product => (
                <ProductCard
                    key={keyHandler(product.id)}
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