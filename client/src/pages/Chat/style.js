import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChatAnswers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;
`

export const ChatInput = styled.div`
  width: 100%;
  height: 220px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 2px gray;

  div {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 800px;
  }

  textarea {
    width: 100%;
    height: 40px;
    //max-height: 130px;
    border: solid 1px lightgray;
    border-radius: 5px;
    margin-inline-end: 10px;
    padding: 5px;
    transition: 0.5s;
    box-shadow: 0px 0px 5px 2px gray;
    resize: none;
    outline: none;

    &:focus {
      border-color: gray;
      transition: 0.5s;
    }
  }
`

export const MenuBar = styled.div`
  width: 280px;
  height: 100%;
  background-color: #202123;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const History = styled.div`
  padding: 10px;
  flex-basis: 80%;
`

export const Options = styled.div`
  border-top: solid 1px #6e6e80;
  padding: 10px;
  flex-basis: 15%;
`
