import { IProducts } from './products.types'

export interface ICartProduct extends IProducts {
  quantity: number
}
