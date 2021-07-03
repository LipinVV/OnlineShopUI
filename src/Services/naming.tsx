
export const getFullCategoryName= (product: string) => {
    if(!product) {
        return product.toUpperCase() + product.slice(1)
    }
    return product[0].toUpperCase() + product.slice(1)
}

