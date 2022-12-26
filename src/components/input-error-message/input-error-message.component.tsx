import React, { FunctionComponent } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'

interface IProps {
  children: React.ReactNode
}

export const InputErrorMessage: FunctionComponent<IProps> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}
