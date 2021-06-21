import { Filter } from "./Filter";
import { ProductsToFilter } from "./ProductsToFilter";
import { StoreContext } from '../../App';
import { useContext, useState } from "react";
import { filterTypes } from "./types";
import { getTotalPriceForProduct } from "../../Services/products";

export const FilteredList = () => {
    const { state } = useContext(StoreContext)
    const products = state.products;

    const [filter, setFilter] = useState({ colors: [], categories: [], rating: false, minPrice: 0, maxPrice: 0 })

    const getFilteredProducts = (productsFromGlobalState: any, filter: filterTypes) => {
        let filteredProducts = productsFromGlobalState;
        if (Boolean(filter.categories.length)) {
            filteredProducts = filteredProducts.filter((product: any) => {
                return filter.categories.includes(product.category)
            })
        }
        if (Boolean(filter.rating)) {
            filteredProducts = filteredProducts.filter((product: any) => {
                return product.rating > 3
            })
        }
        if (Boolean(filter.maxPrice)) {
            filteredProducts = filteredProducts.filter((product: any) => {
                return getTotalPriceForProduct(product) <= filter.maxPrice;
            })
        }
        if (Boolean(filter.minPrice)) {
            filteredProducts = filteredProducts.filter((product: any) => {
                return getTotalPriceForProduct(product) >= filter.minPrice;
            })
        }

        if (Boolean(filter.colors.length)) {

            filteredProducts = filteredProducts.filter((product: any, index: any) => {
                console.log(product.options?.filter((a:any,i:any) => filter.colors.includes(a.value[i])).filter((x:any,o:any) => console.log(x.value[o])))
                return product.options?.filter((a:any,i:any) => filter.colors.includes(a.value[i]))
            })
        }

        console.log('filteredProducts', filteredProducts)
        return filteredProducts;
    }

    const filteredProducts = getFilteredProducts(products, filter);

    return (
        <div className='filtered-results'>
            <Filter options={filter} optionsChanged={(newFilter: any) => setFilter(newFilter)} />
            <ProductsToFilter products={filteredProducts} />
        </div>

    )
}