import { render } from '@testing-library/react'
import { CustomButton } from './custom-button.component'

describe('Custom Button', () => {
  test('should render with correct values', () => {
    const { getByText } = render(<CustomButton>lorem ipsum</CustomButton>)

    getByText('lorem ipsum')
  })
})
