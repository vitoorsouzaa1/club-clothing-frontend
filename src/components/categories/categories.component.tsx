// Libs
import { useEffect, useContext } from 'react'

// Components
import { CategoryItem } from '../category-item/category-item.component'

// Utilities
import { CategoryContext } from '../../context/category.context'
import { LoadingComponent } from '../loading/loading.components'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

export const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <LoadingComponent />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}
