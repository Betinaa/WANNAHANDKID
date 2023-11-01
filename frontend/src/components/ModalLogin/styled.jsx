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
    margin-top: 3vh;
    transform: rotate(363deg);
    display: flex;
    margin-top: 3.5vh;
    margin-left: 48.7vw;
    margin-right: 50vw;
    align-items: center; 
    justify-content: center;
`
