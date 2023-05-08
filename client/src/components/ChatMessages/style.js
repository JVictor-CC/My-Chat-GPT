import styled, { css } from 'styled-components'

export const MessageContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({variant}) => variant === 'send' && css`
        background-color: lightgray;
        border-top: solid 1px gray;
        border-bottom: solid 1px gray;
    `} 

    div{
        width: 100%;
        max-width: 800px;
        margin: 20px;
        display: flex;
    }

    span{
        padding-inline-end: 10px;
        font-size: 25px;
    }

    p{
        white-space: pre-wrap;
        word-wrap: break-word;
    }
`