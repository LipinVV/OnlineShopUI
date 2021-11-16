import {StoreContext} from "../../../App";
import React, {useContext} from "react";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../services/keyHandler";
import {productType} from "../../Product/types";

export const BestSellersBase = () => {
    const {state} = useContext(StoreContext);
    const SALES_COUNTER = 50;
    const currentItems = state.products.filter((product: productType) => product.salesCount > SALES_COUNTER).sort((a, b) => b.salesCount - a.salesCount);
    return (
        <div className='bestsellers-base'>
            <h1 className='bestsellers-base-header'>Our products with top-selling rate: more than {SALES_COUNTER} of each one sold out!</h1>
            <div className='bestsellers-base__products'>
                {currentItems.map((product => (
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
                )))}
            </div>
        </div>
    )
}