import {productType} from '../Product/types'

export interface CartProductInterface extends productType {
    quantity: number
    finalPrice: number
}
