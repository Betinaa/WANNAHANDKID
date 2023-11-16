import styled from "styled-components";

export const DivContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 1000;
`
export const ButtonFundo = styled.button`
    background-color: red;
    border: none;


`

export const DivCard = styled.div`
    display: flex;
    margin-right: 10vw;
    height: 7vh;
    background-color: #F1F1EA;
    border-radius: 30px;
    color: black;
    width: 10vw;
    text-align: right
    align-items: right;
    justify-content: flex-end;
    margin-left: 80vw;
    margin-top: 2vh;

`


export const PesquisarEscrever = styled.input`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    ::placeholder {
    
    }

    &:focus { 
        outline: 0;
    }
`