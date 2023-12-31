import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 2vw;
`

export const DivButtonMenu = styled.button`
    display: flex;
    flex-direction: row;
    align-items: left; /* Centraliza verticalmente */
    justify-content: left; /* Centraliza horizontalmente */
    background-color: #FFFFFF;
    cursor: pointer;
    border: none;
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
    transform: rotate(363deg);
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
export const FotoEditarPerfil = styled.img`
    width: 6vw;
    height: 11.6vh;
    border-radius: 50%;
`
export const ParteCima = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12vh;
    margin-left: 5vh;
`
export const NomeUsuario = styled.h3`
    align-items: center;
    justify-content: center;
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
`

export const Link = styled.link`
    display: flex;
    flex-direction: row;
    align-items: center; 
    text-decoration: none;
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


