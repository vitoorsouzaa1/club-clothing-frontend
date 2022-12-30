import { renderWithRedux } from '../../helpers/test.helpers'
import { IProducts } from '../../types/products.types'
import { ProductItem } from './product-item.component'

describe('Product Item', () => {
  it('should show correct product', () => {
    const product: IProducts = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100
    }

    const { getByText } = renderWithRedux(<ProductItem product={product} />, {})

    getByText(/boné/i)
    getByText('R$ 100')
    getByText(/add to cart/i)
  })
})
