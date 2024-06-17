import styled from 'styled-components'

export const ChatExample = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`

export const Icon = styled.span`
  font-size: 32px;
`

export const Examples = styled.div`
  display: flex;

  div {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 18px;
    font-weight: 400;
    margin: 12px;
  }

  p {
    text-align: center;
    font-size: 14px;
    padding: 20px;
    margin: 12px;
    max-width: 260px;
    border: solid 1px #b8b8bf;
    border-radius: 5px;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #e9e9f2;
    transition: 0.5s;

    &:hover {
      background-color: #d5d5de;
      transition: 0.3s;
    }
  }
`
