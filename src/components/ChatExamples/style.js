import styled from 'styled-components'

export const ChatExample = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`

export const Examples = styled.div`
    display: flex;

    div{
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-size: 18px;
        font-weight: 400;
        margin: 12px;
    }

    p{
        text-align: center;
        font-size: 14px;
        padding: 20px;
        margin: 12px;
        max-width: 260px;
        border: solid 1px #B8B8BF;
        border-radius: 5px;
        white-space: pre-wrap;
        word-wrap: break-word;
        background-color: #E9E9F2;
        transition: 0.5s;

        &:hover{
            background-color: #D5D5DE;
            transition: 0.3s;
        }
    }
`