import React from 'react'
import { ButtonContainer, IconContainer } from './style'

const Button = ({ title, isValid = true, variant, onClick, leftIcon }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} disabled={!isValid}>{leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}<span>{title}</span></ButtonContainer>
  )
}

export default Button