import {useContext} from "react";
import {StoreContext} from "../../../App";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../Services/key-handler";

export const BestSellersBase = () => {
    const {state} = useContext(StoreContext);
    const SALES_COUNTER = 280;
    const currentItems = state.products.filter((a: any) => a.salesCount > SALES_COUNTER).sort((a, b) => b.salesCount - a.salesCount);
    return (
        <div className='bestsellers-base'>
            <h1 className='bestsellers-base-header'>Our products with top-selling rate: more than {SALES_COUNTER} were sold out!</h1>
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