import {StoreContext} from '../../App';
import {Filter} from "./Filter";
import {ProductsToFilter} from "./ProductsToFilter";
import React, {useContext, useState} from "react";
import {getTotalPriceForProduct} from "../../services/products";
import {filterTypes} from "./types";
import {productType} from "../Product/types";
import '../Pagination/pagination.scss';

export const FilteredList = () => {
    const {state} = useContext(StoreContext)
    const products = state.products;

    const [filter, setFilter] = useState({
        colors: [],
        categories: [],
        rating: false,
        minPrice: 0,
        maxPrice: 0,
        sortByAlphabet: false,
        sortFromTheTop: true,
        sortFromTheBottom: false
    })

    const getFilteredProducts = (productsFromGlobalState: productType[], filter: filterTypes) => {
        let filteredProducts = productsFromGlobalState;
        if (Boolean(filter.categories.length)) {
            filteredProducts = filteredProducts.filter((product: productType) => {
                return filter.categories.includes(product.category)
            })
        }

        if (Boolean(filter.rating)) {
            filteredProducts = filteredProducts.filter((product: productType) => {
                return product.rating > 3
            })
        }

        if (Boolean(filter.maxPrice)) {
            filteredProducts = filteredProducts.filter((product: productType) => {
                return getTotalPriceForProduct(product) <= filter.maxPrice;
            })
        }

        if (Boolean(filter.sortByAlphabet)) {
            filteredProducts = filteredProducts.sort((productA: productType, productB: productType) => {
                filter.sortFromTheTop = false;
                filter.sortFromTheBottom = false;
                return productA.title.localeCompare(productB.title)
            })
        }

        if (Boolean(filter.sortFromTheTop)) {
            filteredProducts = filteredProducts.sort((productA: productType, productB: productType) => {
                return getTotalPriceForProduct(productB) - getTotalPriceForProduct(productA)
            })
        }

        if (Boolean(filter.sortFromTheBottom)) {
            filteredProducts = filteredProducts.sort((productA: productType, productB: productType) => {
                return getTotalPriceForProduct(productA) - getTotalPriceForProduct(productB)
            })
        }

        if (Boolean(filter.minPrice)) {
            filteredProducts = filteredProducts.filter((product: productType) => {
                return getTotalPriceForProduct(product) >= filter.minPrice;
            })
        }

        if (Boolean(filter.colors.length)) {
            filteredProducts = filteredProducts.filter((product: any) => {
                const productColors = product?.options?.find((option: any) => option.title === 'color')
                if (productColors?.value?.length) {
                    return productColors.value.some((color: any) => filter.colors.includes(color))
                }
            })
        }
        return filteredProducts;
    }

    const filteredProducts = getFilteredProducts(products, filter);

    const [page, setPage] = useState(1);
    const PAGE_SIZE = 6;

    const indexOfLastItem = page * PAGE_SIZE;
    const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;

    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    function handleClickIncrease() {
        setPage(prevState => prevState + 1);
    }

    function handleClickDecrease() {
        setPage(prevState => prevState - 1);
    }

    return (
        <div className='filtered-results'>
            <Filter options={filter} optionsChanged={(newFilter: any) => setFilter(newFilter)}/>
            <div className='filtered-results-products'>
                <ProductsToFilter products={currentItems}/>
                <div className='pagination-controls'>
                    <div className='pagination-buttons'>
                        <button disabled={page === 1} className='pagination-button'
                                onClick={handleClickDecrease}>{'Previous page'}</button>
                        <button disabled={indexOfLastItem >= products.length} className='pagination-button'
                                onClick={handleClickIncrease}>{'Next page'}</button>
                    </div>
                    <div className='pagination-current-page'>
                        You are on the: {page} page
                    </div>
                </div>
            </div>
        </div>

    )
}