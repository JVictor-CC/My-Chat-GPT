import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;    
    background-color: #202123;
    color: #fff;
    padding: 10px;
    width: 100%;
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    border: none;
    transition: 0.3s;
    border-radius: 10px;

    &:hover{
        background-color: #4A4D59;
        transition: 0.5s;
    }

    ${({variant}) => variant === 'userauth' && css`
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
        

        &:hover{
            background-color: #434b70;
            transition: 0.3s;
        }
        &:disabled{
            background-color: #4A4E66;
            cursor: default;
        }
    `}

    ${({variant}) => variant === 'newchat' && css`
        border: solid 1px #6e6e80 ;
    `}   

    ${({variant}) => variant === 'sendbutton' && css`
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        background-color: #6e6e80;
        width: 100px;
    `} 
`

export const IconContainer = styled.span`
    padding-inline: 8px;
    font-size: 16px;
    margin: 0;
`