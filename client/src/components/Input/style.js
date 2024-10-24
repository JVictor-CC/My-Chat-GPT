import styled, { css } from 'styled-components'

export const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-top: 35px;
  text-transform: capitalize;
`

export const InputContainer = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 40px;
  background-color: #d5d6e0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  input {
    background-color: transparent;
    border: none;
    flex: 1;
    height: 100%;
    text-align: center;
    outline: none;
  }
`

export const IconContainer = styled.div`
  height: 100%;
  font-size: 20px;
  color: #66645d;
  margin: 0;
  padding: 2px;

  background-color: #fff;
`

export const DisplayError = styled.div`
  position: absolute;
  height: 20px;
  padding-left: 5px;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #421d21;
  border-radius: 0 0 5px 5px;
  color: #fff;
  transition: 0.5s;
  overflow: hidden;
  z-index: 1;

  ${({ variant }) =>
    variant === 'nodisplay' &&
    css`
      height: 0;
      padding: 0;
      transform: scaleY(0);
    `}

  p {
    font-size: 14px;
    transform: translateY(0);
    transition: transform 0.5s;
  }
`
