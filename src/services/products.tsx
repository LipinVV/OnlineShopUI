import {productType} from "../components/Product/types";

export const getTotalPriceForProduct = (product: productType):number => {
        return Math.ceil(product.price - ((product.discount / 100) * product.price ));
}