import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { SingleCard } from '../../Product/SingleCard';
import { productType } from '../../Product/types';
import { getCategory, getProductsByCategory, products } from '../../Data/data'
import { ProductCard } from '../../Product/ProductCard'

export const CategoryPage = () => {

    const parameters = useParams<{id: string, category: string }>();
    const product: productType | undefined = products.find(product => product.category === parameters.category)
    console.log('params =>', parameters, 'product =>', product)
    console.log('=>>>', parameters.category)
    //Number(parameters.id)
    return (
        <div>
            {Object.values(getProductsByCategory(parameters.category, products)).map(item => {
                {console.log(item.id)}
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