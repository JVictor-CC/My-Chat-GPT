import React from 'react'
import { InputLabel, InputContainer, IconContainer, DisplayError } from './style'

const Input = ({
  label,
  type,
  placeHolder,
  leftIcon,
  errorMessage,
  length = Infinity,
  register,
  registerName,
}) => {
  return (
    <>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <input
          id={label}
          type={type}
          maxLength={length}
          placeholder={placeHolder}
          {...register(registerName)}
        />
        {errorMessage ? (
          <DisplayError variant="">
            <p>{errorMessage}</p>
          </DisplayError>
        ) : (
          <DisplayError variant="nodisplay"></DisplayError>
        )}
      </InputContainer>
    </>
  )
}

export default Input
