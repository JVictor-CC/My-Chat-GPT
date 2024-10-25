import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  background-color: #202123;
  color: #fff;
  padding: 10px;
  width: 100%;
  margin: 0;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #4a4d59;
    transition: 0.5s;
  }

  ${({ variant }) =>
    variant === 'userauth' &&
    css`
      background-color: #495796;
      color: #fff;
      padding: 16px;
      width: 100%;
      margin: 35px 0;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 0;
      transition: 0.3s;
      justify-content: center;

      &:hover {
        background-color: #434b70;
        transition: 0.3s;
      }
      &:disabled {
        background-color: #4a4e66;
        cursor: default;
      }
    `}

  ${({ variant }) =>
    variant === 'newchat' &&
    css`
      border: solid 1px #6e6e80;
    `}   

    ${({ variant }) =>
    variant === 'sendbutton' &&
    css`
      min-height: 40px;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      background-color: #5a5b5f;
      width: 100px;

      &:disabled {
        background-color: #6e6e80;
        cursor: default;
      }
    `}

    ${({ active }) =>
    active === true &&
    css`
      border: solid 1px #6e6e80;
      background-color: #3a3a3e;
    `}
`

export const IconContainer = styled.span`
  padding-inline: 8px;
  font-size: 16px;
  margin: 0;
`
