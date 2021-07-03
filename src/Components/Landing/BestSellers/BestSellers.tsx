import {StoreContext} from "../../../App";
import {useContext} from "react";
import {ProductCard} from "../../Product/ProductCard";
import {keyHandler} from "../../../Services/keyHandler";
import './bestsellers.scss'
import {Link} from "react-router-dom";
import {productType} from "../../Product/types";

export const BestSellers = () => {
    const {state} = useContext(StoreContext);

    const currentItems = state.products.filter((product: productType) => product.salesCount > 250).sort((a, b) => b.salesCount - a.salesCount).slice(0, 4);
    return (
        <div className='bestsellers-wrapper'>
            <h1 className='bestsellers__header'>Best Sellers: <Link className='bestsellers__header-link' to='/bestsellers'>See All</Link></h1>
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