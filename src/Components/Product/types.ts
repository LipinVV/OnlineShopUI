import { CATEGORY } from '../Data/data'

export type productType = {
    id: number,
    category: CATEGORY,
    title: string,
    price: number,
    previewUrl: string,
    rating: number,
    salesCount: number,
    discount?: number,
    isFavourite: boolean,
}