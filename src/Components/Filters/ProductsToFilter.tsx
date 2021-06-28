import { keyHandler } from "../../Services/keyHandler";
import './filter.scss'
import { ProductCard } from "../Product/ProductCard";
import {productType} from "../Product/types";

export const ProductsToFilter = ({ products = [] }: any) => {
    return (
        <div className='products-to-filter-wrapper'>
            <h3>ProductList</h3>
            <div className='products-to-filter'>
                {products.map((product: productType) => (
                    <ProductCard
                        key={keyHandler(product.id)}
                        id={product.id}
                        category={product.category}
                        title={product.title}
                        price={product.price}
                        previewUrl={product.previewUrl}
                        rating={product.rating}
                        salesCount={product.salesCount}
                        discount={product.discount}
                        isFavourite={product.isFavourite}
                        toBuy={product.toBuy} />
                ))}
            </div>
        </div>
    )
}