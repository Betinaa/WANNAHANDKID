import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DivLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    background-color: #FFFFFF;
`

export const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    margin-left: 5%;

`

export const ImgLogo = styled.img`
    width: 5vw;
    height: 6vh;
    margin-top: 3vh;
`

export const ImgMenu = styled.img`
    width: 4vw;
    height: 6vh;
    margin-left: 3vh;
    margin-top: 3vh;

`

export const DivButton = styled.div`
    text-align: center;
    border: none;
    margin-right: 5%;
    margin-bottom: 0.5%;
`

export const ImgPesquisa = styled.img`
    background: none;
    border: none;
    width: 3vw;
    height: 5vh;
    margin-top: 3vh;
`
