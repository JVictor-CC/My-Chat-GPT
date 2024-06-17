import styled from 'styled-components'
import background from '../assets/opt-bg04.jpeg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  overflow: auto;
`
export const LoginScreenBox = styled.div`
  border-radius: 5px;
  width: 550px;
  height: fit-content;
  padding: 30px;
  background-color: #202123;
  box-shadow: 0px 0px 10px 2px #000;
  color: #fff;

  h1 {
    text-transform: capitalize;
    margin: 10px;
  }

  a {
    color: #fff;
    transition: 0.3s;

    &:visited {
      color: #fff;
    }

    &:hover {
      color: gray;
      transition: 0.3s;
    }
  }
`

export const Title = styled.h1`
  color: #fff;
  margin: 80px 0 60px 0;
  font-size: 64px;
  text-shadow: 0 0 10px #ff9900;
`

export const Center = styled.div`
  text-align: center;
  margin: 25px 0 25px;
`
