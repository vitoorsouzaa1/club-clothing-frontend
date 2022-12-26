import { FunctionComponent } from 'react'
import { ICategory } from '../../types/category.type'

import { CategoryItemContainer, CategoryName } from './categoryItem.styles'
interface ICategoryItemProps {
  category: ICategory
}

export const CategoryItem: FunctionComponent<ICategoryItemProps> = ({
  category
}) => {
  return (
    <CategoryItemContainer
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
