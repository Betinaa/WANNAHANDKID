import styled from "styled-components";

export const DivContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1d1d1f88;
    z-index: 1000;
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 60vh;
    /* margin-top: 0.1vh; */
    margin-left: 31vw;
    margin-right: 30vw;
    height: 91vh;
    padding: 28px 60px 60px 60px;
    background-color: #ffffff;
    border-radius:60px 60px 0px 0px;
    color: black;
    /* transform: 'translate(-50%, -50%)'; */
`

export const DivFechar = styled.div`

`

export const Button = styled.button`
    background-color: #ff0000;
    height:4vh;
`

export const ImgLogo = styled.img`
    cursor: pointer;
    width: 5vw;
    height: 6vh;
    transform: rotate(363deg);
    display: flex;
    margin-top: 3.2vh;
    margin-left: 48.1vw;
    margin-right: 50vw;
    align-items: center; 
    justify-content: center;
`
export const SectionCadastro = styled.form`

`
export const DivFormulario = styled.form`
    margin-top: 8vh;

`
export const H1Container2 = styled.h1`
    font-size: 14px;
    margin-top:3vh;
    /* align-items: center; */
    /* justify-content: center; */
`
export const DivTitulo = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: center;
`
export const Caixa2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    border-style: none;
    background-color: #F1F1EA;
    height: 7.5vh;
    width: 31vw;
    border-radius: 70px;
    margin-top: 2vh; 
`

export const CaixaContainer = styled.input`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    ::placeholder {
    
    }
    margin-left: 2vw;
    &:focus { 
        outline: 0;
    }

`

export const DivEnter = styled.div`
    
`
export const Button2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    background-color: #000000;
    height: 5vh;
    color: #FFFFFF;
    border-radius: 67px;
    width: 23vw;
    border: none;
    font-size: 11px;
    margin-left: 8vw;
    margin-top: 3vh;
`
