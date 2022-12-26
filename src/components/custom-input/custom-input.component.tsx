import { FunctionComponent, InputHTMLAttributes } from 'react'

// Styles
import { CustomInputContainer } from './custom-input.styles'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const CustomInput: FunctionComponent<ICustomInput> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}
