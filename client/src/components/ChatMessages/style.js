import styled, { css } from 'styled-components'

export const MessageContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === 'user' &&
    css`
      div {
        background-color: #e9e9f2;
        max-width: 500px;
      }
    `}

  div {
    width: 100%;
    max-width: 800px;
    margin-top: 15px;
    display: flex;
    padding: 5px;
    border-radius: 5px;
  }

  span {
    padding-inline: 5px;
    font-size: 25px;
  }

  p {
    white-space: pre-wrap;
    word-wrap: break-word;
    width: 100%;
    padding: 5px;
  }
`
