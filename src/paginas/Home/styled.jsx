import styled from "styled-components";
import fototras from "../../assets/fototras.jpg"


export const BodyContainer = styled.body`
    display: flex;
    flex-direction: column;
`

export const H1Container = styled.h1`
    display: flex;
    /* flex-direction: row; */
    align-items: left; /* Centraliza verticalmente */
    /* justify-content: left; Centraliza horizontalmente */
    background-color: #FFFFFF;
    margin-left: 6vw;
    width: 37vw;
    text-transform: uppercase;
    align-items: center;
    font-size: 46px;
    line-height: 40px;
    margin-bottom: 4vh;
    letter-spacing: -1.2px;
    line-height: 7vh;
`

export const H5Container = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    background-color: #FFFFFF;
    margin-left: 12vh;
    width: 30vw;
    font-family: 'Nunito', sans-serif;
    color: #545454;
    letter-spacing: -0.34px;
    opacity: 42%;
    line-height: 120%;
    font-style: Normal;
    font-weight: 500;
`

export const H5Container2 = styled.h5`
    display: flex;
    background-color: #FFFFFF;
    margin-left: 2.5vw;
    width: 21vw;
    /* align-items: center; */
    font-size: 16px;
    background-color: transparent;
    margin-top: 3vh;

`
export const H5Container3 = styled.h5`
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    margin-left: 4.6vh;
    margin-top: 1vh;
    width: 30vw;
    font-family: 'Nunito', sans-serif;
    color: #545454;
    letter-spacing: -0.34px;
    opacity: 42%;
    line-height: 120%;
    font-style: Normal;
    font-weight: 500;

`

export const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left; /* Centraliza horizontalmente */
    background-color: transparent;
    width: 50vw;


`

export const DivRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right; /* Centraliza verticalmente */
    justify-content: right; /* Centraliza horizontalmente */
    width: 50vw;

`
export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    background-color: #E9E9DF;
    
    border-radius: 60px;
    width: 22vw;
    height: 67vh;
    margin-right: 23vh;
    z-index: 1;
    position: relative;
    /* margin-bottom: 70vh; */
    
`
export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: 20vh;
`

export const CaixaEmailContainer = styled.input`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    width: 80%;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    ::placeholder {
        
    }
    margin-left: 1vw;
    &:focus { 
        outline: 0;
    }

`

export const Caixa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-style: none;
    background-color: #F1F1EA;
    margin-left: 5vw;
    height: 10vh;
    width: 35vw;
    border-radius: 67px;
    margin-top: 8vh;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: none;
    background-color: #000000;
    height: 8vh;
    color: #FFFFFF;
    border-radius: 67px;
    width: 14vw;
    border: none;
    font-size: 11px;
`
export const ImgMeninaFrente = styled.img`
    width: 19vw;
    height: 47vh;
    border-radius: 39px;
    margin-left: 7%;
    margin-top: 7%;
    justify-content: center;
`
export const EnvelopeEmail = styled.img`
    align-items: left;
    width: 4vw;
    height: 5vh;
    /* margin-left: 10vw; */
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2vw;
    opacity: 42%;
`
export const FotoTras = styled.img`
    position: absolute; 
    width: 18vw;
    height: 42vh;
    border-radius: 40px;
    margin-top: 8vh;
    margin-right: 25vw;
    margin-left: 50vw;
    margin-bottom: 50vh;
    z-index: -1;
    opacity: 70%;
    transform: rotate(365deg);
`
