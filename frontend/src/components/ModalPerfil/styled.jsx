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
export const ButtonFundo = styled.button`
    background-color: transparent;
    margin-left: 40vw;
    height: 100vh;
    width: 99vw;
    border: none;

`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 60vw;
    height: 100vh;
    background-color: #ffffff;
    border-radius:0px 0px 0px 0px;
    color: black;

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

export const ParteCima = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12vh;
    margin-left: 5vh;
`
export const NomeUsuario = styled.input`
    align-items: center;
    justify-content: center;
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Archivo Black', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #000000; 
    ::placeholder {
        
    }
    &:focus { 
        outline: 0;
    }
`

export const Profissao = styled.h5`
    align-items: center; 
    justify-content: center;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #000000;
    opacity: 40%;
    font-size: 12px;
    margin-top: -0.1vh;

`


export const ParteMeio = styled.div`
    margin-left: 0.5vw;

    
`

export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center;  */
    justify-content: center;
    margin-left: 3vh;
`

export const Edicao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 9vh;
    margin-top: 16vh;

`

export const Nome = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const EmailEditar = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center; 
    margin-top: 4vh;
`

export const Favoritos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
`

export const Categoria = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center; 
    margin-top: 4vh;
`

export const Favoritado = styled.img`
    width: 4vw;
    height: 4vh;
    cursor: pointer;
    transform: rotate(360deg);
    margin-bottom: 4vh;
`

export const FavoritosEstatico = styled.h5`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    opacity: 70%; 
    ::placeholder {
        
    }
    margin-left: 2vw;
    &:focus { 
        outline: 0;
    }
`
export const FavoritosFuncional = styled.h5`
    margin-left: 16.5vw;
`

export const NomeEstatico = styled.h5`
    display: flex;
    border-style: none;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    opacity: 70%; 
    ::placeholder {
        
    }
    margin-left: 2vw;
    &:focus { 
        outline: 0;
    }
`

export const NomeFuncional = styled.input`
    margin-left: 17vw;
    display: flex;
    border-style: none;
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

export const CategoriaEstatico = styled.h5`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    opacity: 70%; 
    ::placeholder {
        
    }
    margin-left: 2vw;
    /* margin-top: 3vh; */
    &:focus { 
        outline: 0;
    }

`

export const EmailEstatico = styled.h5`
    /* font-size: 13px;
    width: 4vw;
    height: 4vh; */
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    opacity: 70%; 
    ::placeholder {
        
    }
    margin-left: 2vw;
    &:focus { 
        outline: 0;
    }

`
export const EmailFuncional = styled.input`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    ::placeholder {
        
    }
    margin-left: 13vw;
    &:focus { 
        outline: 0;
    }
`

export const CategoriaFuncional = styled.input`
    display: flex;
    border-style: none;
    background-color: transparent;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    ::placeholder {
        
    }
    margin-left: 16vw;
    &:focus { 
        outline: 0;
    }
    
`

export const CriarPostagemEstatico = styled.h5`
    margin-left: 6.5vw;
    margin-top: 15vh;
    display: flex;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    text-decoration: none;
    &:focus { 
        outline: 0;
        text-decoration: none;
    }

`
export const CriarPostagem = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center; 
    text-decoration: none;

    a{
        text-decoration:none;
    }
`


export const VerPostagemEstatico = styled.h5`
    margin-left: 6.5vw;
    margin-top: 4vh;
    display: flex;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    text-decoration: none;
    &:focus { 
        outline: 0;
        text-decoration: none;
    }

`
export const VerPostagem = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: center; 
    text-decoration: none;
`

export const FotoEditarPerfil = styled.img`
    width: 6vw;
    height: 11.6vh;
    border-radius: 50%;
`
