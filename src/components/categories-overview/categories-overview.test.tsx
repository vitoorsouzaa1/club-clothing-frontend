import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import { ICategory } from '../../types/category.type'
import { CategoriesOverview } from './categories-overview.component'

jest.mock('firebase/firestore')

describe('Categories Overview', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any

    mockedFirestore.getDocs.mockImplementation(async () => [
      {
        data(): ICategory {
          return {
            id: '1',
            displayName: 'Lorem Ipsum',
            imageUrl: 'image_url',
            name: 'lorem-ipsum',
            products: [
              { id: '1', name: 'any_name', price: 100, imageUrl: 'image_url' }
            ]
          }
        }
      }
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { findByText, getByText } = renderWithRedux(
      <CategoriesOverview />,
      {}
    )

    await findByText(/any_name/i)
    getByText('Lorem Ipsum')
    getByText('R$100')
  })
})
