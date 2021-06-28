
export const getFullCategoryName= (product: any) => {
    if(!product.category) {
        return product[0].toUpperCase() + product.slice(1)
    }
    return product.category[0].toUpperCase() + product.category.slice(1)
}

