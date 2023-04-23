import styled from 'styled-components'

export const MessagesList = styled.div`
    
`

export const MessageContainer = styled.div`
    width: 100%;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px gray;

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