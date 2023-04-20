import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: #495796;
    color: #fff;
    padding: 16px;
    width: 100%;
    margin: 35px 0;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: 0.3s;
    &:hover{
        background-color: #434b70;
        transition: 0.3s;
    }
    &:disabled{
        background-color: #4A4E66;
        cursor: default;
    }
    //${({variant}) => variant === 'logout' && css`    `}
`