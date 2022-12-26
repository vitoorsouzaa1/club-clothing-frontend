import { FunctionComponent } from 'react'
import { ICategory } from '../../types/category.type'

interface ICategoryItemProps {
  category: ICategory
}

export const CategoryItem: FunctionComponent<ICategoryItemProps> = ({
  category
}) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}
