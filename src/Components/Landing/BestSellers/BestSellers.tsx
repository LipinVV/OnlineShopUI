import {StoreContext} from "../../../App";
import {useContext} from "react";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../Services/key-handler";
import './bestsellers.scss'
import {Link} from "react-router-dom";
import {BestSellersBase} from "./BestSellersBase";

export const BestSellers = () => {
    const {state} = useContext(StoreContext);

    const currentItems = state.products.filter((a: any) => a.salesCount > 250).sort((a, b) => b.salesCount - a.salesCount).slice(1, 4);
    return (
        <div >
            <h1 className='bestsellers__header'>Best Sellers: <Link to='/bestsellers'>See All</Link></h1>
            <div className='bestsellers'>
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