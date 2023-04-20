import React from 'react'
import { ButtonContainer } from './style'

const Button = ({ title, isValid, variant, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} disabled={!isValid}>{title}</ButtonContainer>
  )
}

export default Button