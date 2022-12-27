import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

// Utilities
import { ICategory } from '../../types/category.type'

// Styles
import { CategoryItemContainer, CategoryName } from './categoryItem.styles'
interface ICategoryItemProps {
  category: ICategory
}

export const CategoryItem: FunctionComponent<ICategoryItemProps> = ({
  category
}) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
