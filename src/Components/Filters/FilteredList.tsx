import {Filter} from "./Filter";
import {ProductList} from "./ProductList";
import { StoreContext } from '../../App';
import {useContext, useState} from "react";
import {filterTypes} from "./types";

export const FilteredList = () => {
    const { state } = useContext(StoreContext)
    const products = state.products;

    const [filter, setFilter] = useState({colors: [], categories: [], rating: false, minPrice: 5, maxPrice: 999})

    const getFilteredProducts = (productsFromGlobalState:any, filter:filterTypes) => {
        let filteredProducts = productsFromGlobalState;
        if(Boolean(filter.categories.length)) {
            filteredProducts = filteredProducts.filter((product:any) => {
                console.log('FILTER', filter)
                return filter.categories.includes(product.category)
            })
        }
        if(Boolean(filter.rating)) {
            filteredProducts = filteredProducts.filter((product: any) => {
                return product.rating > 3
            })
        }

        return filteredProducts;
    }

    const filteredProducts = getFilteredProducts(products, filter);



    return (
        <div>RESULTS:
        <Filter options={filter} optionsChanged={(newFilter:any) => setFilter(newFilter)}/>
        <ProductList  products={filteredProducts}/>
        </div>

    )
}