import { FunctionComponent } from 'react'

// Utilities
import { ICategory } from '../../types/category.type'

// Components
import { ProductItem } from '../product-item/product-item.component'

// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

interface ICategoryOverviewProps {
  category: ICategory
}

export const CategoryOverview: FunctionComponent<ICategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}
