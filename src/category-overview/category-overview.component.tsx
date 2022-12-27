import { FunctionComponent } from 'react'
import { ICategory } from '../types/category.type'
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

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}
