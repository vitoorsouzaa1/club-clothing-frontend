import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ICategory } from '../../types/category.type'
import { CategoryItem } from './category-item.component'

describe('Category Item', () => {
  test('should render with correct display name', () => {
    const category: ICategory = {
      id: '1',
      displayName: 'any_display',
      imageUrl: 'any_url',
      name: 'any_name',
      products: []
    }

    const { getByText } = render(
      <BrowserRouter>
        <CategoryItem category={category} />
      </BrowserRouter>
    )
    getByText('any_display')
  })
})
