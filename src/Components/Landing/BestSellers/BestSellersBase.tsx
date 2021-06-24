import {useContext} from "react";
import {StoreContext} from "../../../App";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../Services/key-handler";


export const BestSellersBase = () => {
    const {state} = useContext(StoreContext);

    const currentItems = state.products.filter((a: any) => a.salesCount > 250).sort((a, b) => b.salesCount - a.salesCount);
    return (
        <div>
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
    )
}