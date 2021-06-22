import React, {useState, useContext} from "react";
import {StoreContext} from '../../App';
import {ProductCard} from "../Product/ProductCard";
import {keyHandler} from '../../Services/key-handler'
import './showroom.scss'

export const Showroom = () => {

    const {state} = useContext(StoreContext)
    const items = state.products;

    const [page, setPage] = useState(1);
    const PAGE_SIZE = 3;

    const indexOfLastItem = page * PAGE_SIZE;
    const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;

    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    function handleClickIncrease() {
        setPage(prevState => prevState + 1);
    }

    function handleClickDecrease() {
        setPage(prevState => prevState - 1);
    }

    return (
        <div className='show-room-wrapper'>
            <div className='show-room'>
                {currentItems.map((product) => {
                    return <ProductCard
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
                })}
            </div>
            <div className='show-room-controls'>
                <div className='show-room-buttons'>
                    <button disabled={page === 1} className='show-room-button'
                            onClick={handleClickDecrease}>{'Previous page'}</button>
                    <button disabled={indexOfLastItem === items.length} className='show-room-button'
                            onClick={handleClickIncrease}>{'Next page'}</button>
                </div>
                <div className='show-room-current-page'>
                    You are on the: {page} page
                </div>
            </div>
        </div>
    )
}