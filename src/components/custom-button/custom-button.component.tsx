import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

// Styles
import { CustomButtonContainer, IconContainer } from './custom-buttom.styles'

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}

export const CustomButton: FunctionComponent<ICustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  )
}
