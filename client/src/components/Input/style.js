import styled, { css } from 'styled-components'

export const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-top: 35px;
  text-transform: capitalize;
`

export const InputContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 50px;
  background-color: #d5d6e0;

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
  padding: 7px;
  font-size: 20px;
  color: #66645d;
  margin: 0;

  background-color: #fff;
  border: solid 3px #d5d6e0;
  border-radius: 6px;
`

export const DisplayError = styled.div`
  position: relative;
  height: 30px;
  top: -9.5px;
  background-color: #3b2f30;
  border-radius: 0 0 5px 5px;
  color: #fff;
  transition: 0.5s;

  ${({ variant }) =>
    variant === 'nodisplay' &&
    css`
      height: 0px;
      overflow: hidden;
      padding: 0;
      transform: scaleY(0);
    `}

  p {
    font-size: 14px;
    transform: translate(4%, 35%) scaleY(1);
    transition: transform 0.5s;
  }
`
