import { render } from '@testing-library/react'
import { LoadingComponent } from './loading.components'

describe('Loading Component', () => {
  test('should show a message if the component renders correctly', () => {
    const { getByText } = render(<LoadingComponent message="Aguarde..." />)

    getByText('Aguarde...')
  })
})
