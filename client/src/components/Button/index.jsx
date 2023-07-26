import React from 'react'
import { ButtonContainer, IconContainer } from './style'

const Button = ({ title, isValid = true, variant, onClick, leftIcon, active=false }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} active={active} disabled={!isValid}>{leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}<span>{title}</span></ButtonContainer>
  )
}

export default Button