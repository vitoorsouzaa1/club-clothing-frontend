import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import { CategoryItem } from '../category-item/category-item.component'

// Utilities
import { LoadingComponent } from '../loading/loading.components'
import { fetchCategories } from '../../store/reducers/category/category-actions'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { useAppSelector } from '../../hooks/redux.hooks'

export const Categories = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
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
