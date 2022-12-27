import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../context/cart.context'
import { IProducts } from '../../types/products.types'

// Components
import { CustomButton } from '../custom-button/custom-button.component'

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
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => addProductToCart(product)

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Add to cart
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
