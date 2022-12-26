import { IProducts } from './products.types'

export interface ICategory {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: IProducts[]
}
