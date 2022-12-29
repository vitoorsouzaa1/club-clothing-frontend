import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Utilities
import { useAppSelector } from '../../hooks/redux.hooks'
import { fetchCategories } from '../../store/reducers/category/category-actions'

// Components
import { CategoryOverview } from '../category-overview/category-overview.component'
import { LoadingComponent } from '../loading/loading.components'

// Styles
import { Container } from './categories-overview.styles'

export const CategoriesOverview: FunctionComponent = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
    }
  }, [])

  if (isLoading) return <LoadingComponent />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}
