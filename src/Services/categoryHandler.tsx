import {productType} from "../Components/Product/types";
// аннотация productType[] показывает то, что возвращает функция
export const getProductsByCategory = (category: string, products: productType[]): productType[] => {
    return products.filter(product => product.category === category);
}