import {productType} from "../Components/Product/types";

export const getProductsByCategory = (category: string, products: productType[]): productType[] => {
    return products.filter(product => product.category === category);
}