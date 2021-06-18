import {keyHandler} from "../../Services/key-handler";
import './filter.scss'
import {SingleCard} from "../Product/SingleCard";
import {ProductCard} from "../Product/ProductCard";

export const ProductsToFilter = ({products = []}: any) => {
console.log(products)
    return (
        <div className='products-to-filter-wrapper'>
            <h3>ProductList</h3>
            <div className='products-to-filter'>
                {products.map((product: any) => (
                    <ProductCard
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