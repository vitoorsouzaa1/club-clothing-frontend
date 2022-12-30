import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Colors } from '../../theme/Colors'
import { CustomInput } from './custom-input.component'

describe('Custom Input', () => {
  test('should render with error if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="lorem ipsum" hasError={true} />
    )

    const input = getByPlaceholderText('lorem ipsum')

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` })
  })

  test('should render with success if hasError is false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="lorem ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('lorem ipsum')

    expect(input).toHaveStyle({ border: 'none' })
  })

  test('should change value when user types', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="lorem ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('lorem ipsum')

    userEvent.type(input, 'Display Changed Value')
    getByDisplayValue('Display Changed Value')
  })
})
