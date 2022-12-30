import { render } from '@testing-library/react'
import { Colors } from '../../theme/Colors'
import { InputErrorMessage } from './input-error-message.component'

describe('Input Error Message', () => {
  test('should show message with error color', () => {
    const { getByText } = render(
      <InputErrorMessage>Error message</InputErrorMessage>
    )

    const message = getByText('Error message')

    expect(message).toHaveStyle({ color: Colors.error })
  })
})
