import styled from 'styled-components';

export const PostC = styled.div`
    width: 30vw;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: right;
`

export const Foto = styled.video`
    border-radius: 10px;
    width: 100%;
`

export const Titulo = styled.p`
    font-family: 'Nunito', sans-serif;
    font-style: Normal;
    font-weight: 500;
    font-size: 13px;
    color: black;
    display: flex;
    margin-right: 2vw;
    margin-top: 0.5vw;
    font-weight: bold;
    align-items: right;
    justify-content: right; 
`
export const Tema = styled.p`
    font-family: 'Nunito', sans-serif;
    font-style: Normal;
    font-weight: 500;
    font-size: 12px;
    color: black;
    align-items: right;
    justify-content: right;
    display: flex;
    margin-right: 2vw;
`

export const DivDescricao = styled.div`
    margin-top: 1vh;
    flex-direction: row;
    display: flex;
`

export const DivParteEscrita = styled.div`
    flex-direction: column;
    margin-left: 12vw;
`

export const DivBandeira = styled.div`
    margin-top: 2vh;
    flex-direction: row;
`

export const Favoritado = styled.img`
    width: 4vw;
    height: 4vh;
    cursor: pointer;
    transform: rotate(360deg);
    margin-bottom: 4vh;
`
