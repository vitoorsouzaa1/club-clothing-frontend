import React, { FunctionComponent, InputHTMLAttributes } from 'react'

// Styles
import { CustomInputContainer } from './custom-input.styles'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const CustomInput: FunctionComponent<ICustomInput> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />
  }
)

CustomInput.displayName = 'CustomInput'
