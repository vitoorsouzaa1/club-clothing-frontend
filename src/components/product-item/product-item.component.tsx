import { FunctionComponent } from 'react'

// Utilities
import { IProducts } from '../../types/products.types'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

interface IProductItemProps {
  product: IProducts
}

export const ProductItem: FunctionComponent<IProductItemProps> = ({
  product
}) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
