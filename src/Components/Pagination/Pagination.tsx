import React, { useState, useContext } from "react";
import { StoreContext } from '../../App';
import { ProductCard } from "../Product/ProductCard";
import { keyHandler } from '../../Services/key-handler'
import './pagination.scss'

export const Pagination = () => {

    const { state } = useContext(StoreContext)
    const items = state.products;

    const [page, setPage] = useState(1);
    const PAGE_SIZE = 5;

    const indexOfLastTodo = page * PAGE_SIZE;
    const indexOfFirstTodo = indexOfLastTodo - PAGE_SIZE;

    const currentItems = items.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log('currentItems', currentItems)


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / PAGE_SIZE); i++) {
        pageNumbers.push(i);
    }

    function handleClickIncrease() {
        setPage(prevState => prevState + 1);
    }

    function handleClickDecrease() {
        setPage(prevState => prevState - 1);
    }


    return (
        <div className='pagination-test'>
            {currentItems.map((product, index) => {
                return <div>
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
                </div>
            })}
        </div>
    )
}