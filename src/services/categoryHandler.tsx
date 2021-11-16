import {productType} from "../components/Product/types";

export const getProductsByCategory = (category: string, products: productType[]): productType[] => {
    return products.filter(product => product.category === category);
}